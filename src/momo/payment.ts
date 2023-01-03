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

type IUseInfo = {
  name: string;
  phoneNumber: string;
  email: string;
};
type IItems = {
  id: string; // SKU number
  name: string; // Tên sản phẩm
  description?: string; // Miêu tả sản phẩm
  category?: string; // Phân loại ngành hàng của sản phẩm
  imageUrl?: string; // Link hình ảnh của sản phẩm
  manufacturer?: string; // Tên nhà sản xuất
  price: number; // Đơn giá
  currency: string; // VND
  quantity: number; // Số lượng của sản phẩm. Cần là một số lớn hơn 0
  unit?: string; // Đơn vị đo lường của sản phẩm này
  totalPrice: number; // Tổng giá = Đơn giá x Số lượng
  taxAmount?: number; // Tổng thuế
};
type IOrderPaymentMethodParams = {
  partnerCode: string; //		Thông tin tích hợp
  partnerName?: string; //		Tên đối tác
  storeId?: string; //		Mã cửa hàng
  requestId: string; //(50)		Định danh duy nhất cho mỗi yêu cầu Đối tác sử dụng requestId để xử lý idempotency
  amount: number;
  orderId: string; //		Mã đơn hàng của đối tác
  orderInfo: string; //		Thông tin đơn hàng
  orderGroupId?: number; //orderGroupId được MoMo cung cấp để phân nhóm đơn hàng cho các hoạt động vận hành sau này. Vui lòng liên hệ với MoMo để biết chi tiết cách sử dụng
  redirectUrl: string; //		Một URL của đối tác. URL này được sử dụng để chuyển trang (redirect) từ MoMo về trang mua hàng của đối tác sau khi khách hàng thanh toán. Hỗ trợ: AppLink and WebLink
  ipnUrl: string; //		API của đối tác. Được MoMo sử dụng để gửi kết quả thanh toán theo phương thức IPN (server-to-server)
  requestType: string; //		captureWallet
  extraData: string; //		Giá trị mặc định là rỗng"" Encode base64 theo định dạng Json: {"key": "value"} Ví dụ với dữ liệu: {"username": "momo"}thì data extraData: eyJ1c2VybmFtZSI6ICJtb21vIn0= items	List		Danh sách các sản phẩm hiển thị trên trang thanh toán. Tối đa: 50 loại sản phẩm
  items?: IItems[];
  userInfo?: IUseInfo; //Thông tin người dùng
  autoCapture?: Boolean; //	Nếu giá trị false, giao dịch sẽ không tự động capture. Mặc định là true
  lang: string; //		Ngôn ngữ của message được trả về (vi hoặc en)
  signature: string; //
};

type IOrderPaymentMethodRes = {
  partnerCode: string; // Thông tin tích hợp
  requestId: string; // Giống với yêu cầu ban đầu
  orderId: string; // Mã đơn hàng của đối tác
  amount: number; // Giống với số tiền yêu cầu ban đầu
  responseTime: number; // Thời gian trả kết quả thanh toán về đối tác Định dạng: timestamp
  message: string; // Mô tả lỗi, ngôn ngữ dựa trên lang
  resultCode: number; //	Result Code
  payUrl: string; // URL để chuyển từ trang mua hàng của đối tác sang trang thanh toán của MoMo
  deeplink?: string; // URL để mở ứng dụng trực tiếp MoMo (Khách hàng phải cài đặt ứng dụng MoMo trước) và trang xác nhận thanh toán.
  qrCodeUrl?: string; // Dữ liệu để tạo mã QR nếu bạn muốn khách hàng quét mã QR trực tiếp trên trang mua hàng hoặc in mã lên hoá đơn. Note: Đây không phải URL chứa hình ảnh của mã QR, bạn cần sử dụng thư viện ngoài để tạo mã QR.
  deeplinkMiniApp?: string; // URL mở màn hình xác nhận thanh toán của ứng dụng MoMo. Áp dụng khi đối tác sử dụng mini app nhúng vào trong ứng dụng MoMo.
  signature?: string; //
};
export const momo = () => {
  return momoPayment<IOrderPaymentMethodRes, IOrderPaymentMethodParams>(
    apiMomo.orderPaymentMethod,
    {
      partnerCode: 'MOMOBKUN20180529',
      partnerName: 'Test',
      storeId: 'Merchant',
      requestType: 'captureWallet',
      ipnUrl: 'https://webhook.site/94e534cb-a54a-4313-8e91-c42f7aa2e145',
      redirectUrl: 'https://webhook.site/94e534cb-a54a-4313-8e91-c42f7aa2e145',
      orderId: '1629181466064:0123456778',
      amount: '10000',
      lang: 'en',
      autoCapture: false,
      orderInfo: 'Thanh toán qua ví MoMo',
      requestId: 'f7a8f62f4234-0bba-405f-8178-1a516ea1fe3c',
      extraData: '',
      signature:
        'a0e6c8676f651f4d8980f04d10ee562fe027d9bacb7df0031c32e3ca42096473',
    }
    // {
    //   partnerCode: 'MOMO',
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
