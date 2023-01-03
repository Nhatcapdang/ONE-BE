type IApiMomo = {
  orderPaymentMethod: Omit<IAPI, 'config'>
}
export const apiMomo: IApiMomo = {
  orderPaymentMethod: {
    url: '/v2/gateway/api/create',
    method: 'POST',
  },
}
