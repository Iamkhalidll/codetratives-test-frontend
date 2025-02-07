const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const Routes = {
  dashboard: `${API_URL}/`,
  login: `${API_URL}/login`,
  logout: `${API_URL}/logout`,
  register: `${API_URL}/register`,
  forgotPassword: `${API_URL}/forgot-password`,
  resetPassword: `${API_URL}/reset-password`,
  adminMyShops: `${API_URL}/my-shops`,
  profile: `${API_URL}/profile`,
  verifyCoupons: `${API_URL}/coupons/verify`,
  settings: `${API_URL}/settings`,
  paymentSettings: `${API_URL}/settings/payment`,
  seoSettings: `${API_URL}/settings/seo`,
  eventSettings: `${API_URL}/settings/events`,
  shopSettings: `${API_URL}/settings/shop`,
  companyInformation: `${API_URL}/settings/company-information`,
  maintenance: `${API_URL}/settings/maintenance`,
  promotionPopup: `${API_URL}/settings/promotion-popup`,
  storeSettings: `${API_URL}/vendor/settings`,
  storeKeepers: `${API_URL}/vendor/store_keepers`,
  profileUpdate: `${API_URL}/profile-update`,
  checkout: `${API_URL}/orders/checkout`,
  verifyEmail: `${API_URL}/verify-email`,
  verifyLicense: `${API_URL}/verify-license`,

  user: {
    ...routesFactory(`${API_URL}/users`),
  },
  type: {
    ...routesFactory(`${API_URL}/groups`),
  },
  category: {
    ...routesFactory(`${API_URL}/categories`),
  },
  attribute: {
    ...routesFactory(`${API_URL}/attributes`),
  },
  attributeValue: {
    ...routesFactory(`${API_URL}/attribute-values`),
  },
  tag: {
    ...routesFactory(`${API_URL}/tags`),
  },
  reviews: {
    ...routesFactory(`${API_URL}/reviews`),
  },
  abuseReviews: {
    ...routesFactory(`${API_URL}/abusive_reports`),
  },
  abuseReviewsReport: {
    ...routesFactory(`${API_URL}/abusive_reports/reject`),
  },
  author: {
    ...routesFactory(`${API_URL}/authors`),
  },
  coupon: {
    ...routesFactory(`${API_URL}/coupons`),
  },
  manufacturer: {
    ...routesFactory(`${API_URL}/manufacturers`),
  },
  order: {
    ...routesFactory(`${API_URL}/orders`),
  },
  orderStatus: {
    ...routesFactory(`${API_URL}/order-status`),
  },
  orderCreate: {
    ...routesFactory(`${API_URL}/orders/create`),
  },
  product: {
    ...routesFactory(`${API_URL}/products`),
  },
  shop: {
    ...routesFactory(`${API_URL}/shops`),
  },
  tax: {
    ...routesFactory(`${API_URL}/taxes`),
  },
  shipping: {
    ...routesFactory(`${API_URL}/shippings`),
  },
  withdraw: {
    ...routesFactory(`${API_URL}/withdraws`),
  },
  staff: {
    ...routesFactory(`${API_URL}/staffs`),
  },
  refund: {
    ...routesFactory(`${API_URL}/refunds`),
  },
  question: {
    ...routesFactory(`${API_URL}/questions`),
  },
  message: {
    ...routesFactory(`${API_URL}/message`),
  },
  shopMessage: {
    ...routesFactory(`${API_URL}/shop-message`),
  },
  conversations: {
    ...routesFactory(`${API_URL}/message/conversations`),
  },
  storeNotice: {
    ...routesFactory(`${API_URL}/store-notices`),
  },
  storeNoticeRead: {
    ...routesFactory(`${API_URL}/store-notices/read`),
  },
  notifyLogs: {
    ...routesFactory(`${API_URL}/notify-logs`),
  },
  faqs: {
    ...routesFactory(`${API_URL}/faqs`),
  },
  refundPolicies: {
    ...routesFactory(`${API_URL}/refund-policies`),
  },
  refundReasons: {
    ...routesFactory(`${API_URL}/refund-reasons`),
  },
  newShops: `${API_URL}/new-shops`,
  draftProducts: `${API_URL}/products/draft`,
  outOfStockOrLowProducts: `${API_URL}/products/product-stock`,
  productInventory: `${API_URL}/products/inventory`,
  transaction: `${API_URL}/orders/transaction`,
  termsAndCondition: {
    ...routesFactory(`${API_URL}/terms-and-conditions`),
  },
  adminList: `${API_URL}/users/admins`,
  vendorList: `${API_URL}/users/vendors`,
  pendingVendorList: `${API_URL}/users/vendors/pending`,
  customerList: `${API_URL}/users/customer`,
  myStaffs: `${API_URL}/users/my-staffs`,
  vendorStaffs: `${API_URL}/users/vendor-staffs`,
  flashSale: {
    ...routesFactory(`${API_URL}/flash-sale`),
  },
  ownerDashboardNotice: `${API_URL}/notice`,
  ownerDashboardMessage: `${API_URL}/owner-message`,
  ownerDashboardMyShop: `${API_URL}/my-shop`,
  myProductsInFlashSale: `${API_URL}/flash-sale/my-products`,
  ownerDashboardNotifyLogs: `${API_URL}/notify-logs`,

  inventory: {
    editWithoutLang: (slug: string, shop?: string) => {
      return shop ? `${API_URL}/${shop}/products/${slug}/edit` : `${API_URL}/products/${slug}/edit`;
    },
    edit: (slug: string, language: string, shop?: string) => {
      return shop
        ? `${API_URL}/${language}/${shop}/products/${slug}/edit`
        : `${API_URL}/${language}/products/${slug}/edit`;
    },
    translate: (slug: string, language: string, shop?: string) => {
      return shop
        ? `${API_URL}/${language}/${shop}/products/${slug}/translate`
        : `${API_URL}/${language}/products/${slug}/translate`;
    },
  },
  visitStore: (slug: string) => `${process.env.NEXT_PUBLIC_SHOP_URL}/${slug}`,
  vendorRequestForFlashSale: {
    ...routesFactory(`${API_URL}/flash-sale/vendor-request`),
  },
  becomeSeller: `${API_URL}/become-seller`,
  ownershipTransferRequest: {
    ...routesFactory(`${API_URL}/shop-transfer`),
  },
  ownerDashboardShopTransferRequest: `${API_URL}/shop-transfer/vendor`,
};

function routesFactory(endpoint: string) {
  return {
    list: `${endpoint}`,
    create: `${endpoint}/create`,
    editWithoutLang: (slug: string, shop?: string) => {
      return shop
        ? `${endpoint}/${shop}${endpoint}/${slug}/edit`
        : `${endpoint}/${slug}/edit`;
    },
    edit: (slug: string, language: string, shop?: string) => {
      return shop
        ? `${endpoint}/${language}/${shop}${endpoint}/${slug}/edit`
        : `${endpoint}/${language}${endpoint}/${slug}/edit`;
    },
    translate: (slug: string, language: string, shop?: string) => {
      return shop
        ? `${endpoint}/${language}/${shop}${endpoint}/${slug}/translate`
        : `${endpoint}/${language}${endpoint}/${slug}/translate`;
    },
    details: (slug: string) => `${endpoint}/${slug}`,
    editByIdWithoutLang: (id: string, shop?: string) => {
      return shop ? `${endpoint}/${shop}${endpoint}/${id}/edit` : `${endpoint}/${id}/edit`;
    },
  };
}