export const PAGE_SIZE_OPTION = [10, 20, 30, 50, 100];
export const DEFAULT_PAGE_SIZE = 10;
export const INVALID_DATE = 'Invalid date';
export const ADMIN_ROLE = 'ADMIN';
export const ADMIN_ACCOUNT = 'admin';
export const TRACKIFY_ACCOUNT = 'Trackify';
export const FILE_SIZE_LIMIT = 8;

export const PAYMENTS = [
  { value: 1, label: 'Tiền mặt' },
  { value: 2, label: 'Chuyển khoản' },
];

export const DEVICE_TYPES = [
  { value: 1, label: 'Di động' },
  { value: 2, label: 'Cố định' },
];

export const STATUS = [
  { value: 0, label: 'Không sử dụng' },
  { value: 1, label: 'Đang sử dụng' },
];

export const DEFAULT_FILTER = {
  columnFilters: {},
  sort: [],
  page: 1,
  pageSize: DEFAULT_PAGE_SIZE,
};

export const MODAL_TYPE = {
  ADD: 'add',
  VIEW: 'view',
  EDIT: 'edit',
};

export const APPLICABLE_COUPON = {
  ALL: 0,
  EMAIL: 1,
};

export const ORDER_STATUS = [
  { value: 0, label: 'Tạo đơn' },
  { value: 1, label: 'Đã thanh toán' },
  { value: 2, label: 'Đã gửi email' },
  { value: 3, label: 'Đã đổi vòng' },
  { value: 5, label: 'Đang xử lý' },
  { value: 7, label: 'Đã hủy' },
  { value: 10, label: 'Thất bại' },
];

export const ORDER_STATUS_ENUM = {
  CREATE_ORDER: 0,
  PAID: 1,
  SENT_EMAIL: 2,
  CHANGED_TICKET_ALL: 3,
  PENDING: 5,
  NOT_PAID: 6,
  CANCELED: 7,
  FAIL: 10,
};

export const FUNCTION_SELECTED_ENUM = {
  NONE: 0,
  SELECTED: 1,
};

export const TRANSACTION_STATUSES = [
  { value: 1, label: 'Thất bại' },
  { value: 0, label: 'Thành công' },
];

export const REPORT_TYPE_PRODUCT = [
  { value: 1, label: 'Theo sản phẩm' },
  { value: 2, label: 'Theo nhóm sản phẩm' },
];

export const REPORT_TYPE_PRODUCT_ENUM = {
  PRODUCT: 1,
  CATEGORY: 2,
};

export const REPORT_TYPE_TOPUP = [
  { value: 1, label: 'Ngày' },
  { value: 2, label: 'Tuần' },
  { value: 3, label: 'Tháng' },
  { value: 4, label: 'Năm' },
];

export const REPORT_TYPE_TOPUP_ENUM = {
  DAY: 1,
  WEEK: 2,
  MONTH: 3,
  YEAR: 4,
};

export const RING_TYPES = [
  { value: 0, label: 'Dành cho khách hàng' },
  { value: 1, label: 'Dành cho đối tác' },
];

export const RING_TYPES_ENUM = {
  CUSTOMER: 0,
  PARTNER: 1,
};

export const TRANSACTION_STATUS_ENUM = {
  SUCCESS: 0,
  FAIL: -1,
};

export const TICKET_CHANNELS = [
  { value: 'OL', label: 'Online' },
  { value: 'OF', label: 'Offline' },
  { value: 'PO', label: 'Pre-order' },
  { value: 'AG', label: 'Đại lý' },
];

export const CUSTOMER_TYPES = [
  { value: 'online', label: 'Online' },
  { value: 'offline', label: 'Offline' },
  { value: 'pre-order', label: 'Pre-order' },
  { value: 'agency', label: 'Đại lý' },
];

export const TICKET_CHANNELS_ENUM = {
  OL: 'Online',
  OF: 'Offline',
  PO: 'Pre-order',
  AG: 'Đại lý',
};

export const TICKET_CHANNELS_TYPE = {
  OL: 'OL',
  OF: 'OF',
  PO: 'PO',
  AG: 'AG',
};

export const COMMON_STATUS = [
  { value: 0, label: 'Hủy' },
  { value: 1, label: 'Kích hoạt' },
];

export const TYPE_FILTER_REPORT = [
  { value: 0, label: 'Tất cả' },
  { value: 1, label: 'Coupon' },
  { value: 2, label: 'Lô coupon' },
];

export const TYPE_FILTER_REPORT_ENUM = {
  ALL: 0,
  COUPON: 1,
  COUPON_GROUP: 2,
};

export const COMMON_STATUS_RINGTYPE = [
  { value: 0, label: 'Kích hoạt' },
  { value: 1, label: 'Huỷ' },
];
export const COMMON_STATUS_LINKED = [
  { value: 0, label: 'Đã liên kết' },
  { value: 1, label: 'Chưa liên kết' },
  { value: 2, label: 'Đã huỷ liên kết' },
];

export const COMMON_STATUS_ENUM = {
  CANCEL: 0,
  ACTIVED: 1,
};

export const OBJECT_USES = [
  { value: 0, label: 'Tất cả' },
  { value: 1, label: 'Đúng email' },
];

export const DISCOUNT_TYPES = [
  { value: 0, label: 'VNĐ' },
  { value: 1, label: '%' },
];

export const DISCOUNT_TYPES_ENUM = {
  VND: 0,
  PERCENT: 1,
};

export const USER_TYPES = [
  { value: 0, label: 'Admin' },
  { value: 1, label: 'NPP' },
  { value: 2, label: 'Agency' },
  { value: 3, label: 'SUP' },
];

export const USER_TYPES_ENUM = {
  AD: 0,
  NPP: 1,
  AG: 2,
  SUP: 3,
};

export const USER_TYPES_INTERFACE = {
  0: 'Admin',
  1: 'NPP',
  2: 'Agency',
  3: 'SUP',
};

export const COLORS = [
  '#00AB55',
  '#4361EE',
  '#805DCA',
  '#e2a03f',
  '#d9f2e6',
  '#0e1726',
  '#3b3f5c',
  '#fff9ed',
  '#e7515a',
];

export const REPORT_TICKET_TYPES_ENUM = {
  TICKET: 1,
  CAMPAIGN: 2,
  COUPON: 3,
  SPECIAL_COUPON: 4,
};
