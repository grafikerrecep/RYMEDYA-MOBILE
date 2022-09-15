import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './navigator/MainStackNavigator';
import AuthStackNavigator from './navigator/AuthStackNavigator';
import {Text, View} from 'react-native';
import {AuthContext} from './context/AuthContext';
import {login} from './services/auth/login.services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import configureStore from './redux/configureStore';
import {Provider} from 'react-redux';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isAdmin: action.isAdmin,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            isAdmin: action.isAdmin,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken, isAdmin;

      try {
        userToken = await AsyncStorage.getItem('userToken').then(value => value);
        isAdmin = await AsyncStorage.getItem('isAdmin').then(value => value);
        axios.defaults.headers.common = {
          Authorization: `Bearer ${userToken}`,
        };
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken, isAdmin: isAdmin});
    };

    bootstrapAsync();
    setIsLoading(false);
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        setIsLoading(true);
        const userData = login(data.name, data.phone);
        userData.then(response => {
          if (response.data) {
            console.log(response.data);
            dispatch({type: 'SIGN_IN', token: response.data.user.api_token, isAdmin: response.data.isAdmin});
            axios.defaults.headers.common = {
              Authorization: `Bearer ${response.data.user.api_token}`,
            };
            if (data.check) {
              AsyncStorage.setItem('userToken', response.data.user.api_token);
              AsyncStorage.setItem('isAdmib', response.data.is_admin);
            }
          }
        });
        setIsLoading(false);
      },
      signOut: () => {
        setIsLoading(true);
        AsyncStorage.removeItem('userToken');
        dispatch({type: 'SIGN_OUT'});
        setIsLoading(false);
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const store = configureStore();

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ? (
          <AuthStackNavigator />
        ) : (
          <Provider store={store}>
            <MainStackNavigator />
          </Provider>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
