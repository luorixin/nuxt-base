const Config = {
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? 'http://m-dev.parllay.cn/' // 接口调用地址
      : 'http://localhost:5000/business', // : 'http://localhost:5000/business',
  redirectUrl:
    process.env.NODE_ENV === 'production'
      ? 'm-dev.parllay.cn'
      : 'brands-local.parllay.cn:3001',
  apiUrl:
    process.env.NODE_ENV === 'production'
      ? 'api-dev.parllay.cn'
      : 'brands-local.parllay.cn:3001'
}
//
export default Config
