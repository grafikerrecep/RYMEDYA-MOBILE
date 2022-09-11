import * as ActionTypes from './actionTypes';

export const getOrders = () => ({
  type: ActionTypes.GET_ORDERS,
  payload: [
    {
      id: 1,
      uuid: 'Order 1',
      status: 'accepted',
      order_info: 'Tasarıma Başandı',
      image: 'https://picsum.photos/200/300',
      created_at: '2020-10-10',
    },
    {
      id: 2,
      uuid: 'Order 2',
      status: 'pending',
      order_info: 'Müşteri Onayı Bekleniyor',
      image: 'https://picsum.photos/200/300',
      created_at: '2020-10-10',
    },
    {
      id: 3,
      uuid: 'Order 3',
      status: 'rejected',
      order_info: 'Sipariş İptal Edildi',
      image: 'https://picsum.photos/200/300',
      created_at: '2020-10-10',
    },
  ],
});
