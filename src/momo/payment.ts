// type orderPaymentMethodParams2 = {
//   id: string // SKU number
//   name: string // Tên sản phẩm
//   description: string // Miêu tả sản phẩm
//   category: string // Phân loại ngành hàng của sản phẩm
//   imageUrl: string // Link hình ảnh của sản phẩm
//   manufacturer: String // Tên nhà sản xuất
//   price: number //	Đơn giá
//   currency: String // VND
//   quantity: number // Số lượng của sản phẩm. Cần là một số lớn hơn 0
//   unit: String // Đơn vị đo lường của sản phẩm này
//   totalPrice: number // Tổng giá = Đơn giá x Số lượng
//   taxAmount: number // Tổng thuế
// }

import { momoPayment } from '../config/axios';
import { apiMomo } from '../config/axios/apiMomo';

export const momo = (body: IOrderPaymentMethodParams) => {
  return momoPayment<IOrderPaymentMethodRes, IOrderPaymentMethodParams>(
    apiMomo.orderPaymentMethod,
    body
    // {
    //   "partnerCode": "MOMOBKUN20180529",
    //   "partnerName": "Test",
    //   "storeId": "Merchant",
    //   "requestType": "captureWallet",
    //   "ipnUrl": "https://webhook.site/94e534cb-a54a-4313-8e91-c42f7aa2e145",
    //   "redirectUrl": "https://webhook.site/94e534cb-a54a-4313-8e91-c42f7aa2e145",
    //   "orderId": "1629181466064:0123456778",
    //   "amount": "10000",
    //   "lang": "en",
    //   "autoCapture": false,
    //   "orderInfo": "Thanh toán qua ví MoMo",
    //   "requestId": "f7a8f62f4234-0bba-405f-8178-1a516ea1fe3c",
    //   "extraData": "",
    //   "signature":
    //     "a0e6c8676f651f4d8980f04d10ee562fe027d9bacb7df0031c32e3ca42096473",
    // }
    // {
    //   partnerCod m e: 'MOMO',
    //   partnerName: 'Test',
    //   storeId: 'MoMoTestStore',
    //   requestType: 'captureWallet',
    //   ipnUrl: 'https://momo.vn',
    //   redirectUrl: 'https://momo.vn',
    //   orderId: 'MM1540456472575',
    //   amount: 150000,
    //   lang: 'vi',
    //   orderInfo: 'SDK team.',
    //   requestId: 'MM1540456472575',
    //   extraData: 'eyJ1c2VybmFtZSI6ICJtb21vIn0=',
    //   signature:
    //     'fd37abbee777e13eaa0d0690d184e4d7e2fb43977281ab0e20701721f07a0e07',
    //   userInfo: {
    //     name: 'Nguyen Van A',
    //     phoneNumber: '0999888999',
    //     email: 'email_add@domain.com',
    //   },
    //   items: [
    //     {
    //       id: '204727',
    //       name: 'YOMOST Bac Ha&Viet Quat 170ml',
    //       description: 'YOMOST Sua Chua Uong Bac Ha&Viet Quat 170ml/1 Hop',
    //       category: 'beverage',
    //       imageUrl: 'https://momo.vn/uploads/product1.jpg',
    //       manufacturer: 'Vinamilk',
    //       price: 11000,
    //       quantity: 5,
    //       unit: 'hộp',
    //       totalPrice: 55000,
    //       taxAmount: '200',
    //     },
    //   ],
    // }
  );
};
