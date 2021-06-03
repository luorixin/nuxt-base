const Config = {
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? 'http://10.27.3.103:8093/'
      : 'http://127.0.0.1:8093/', // : 'http://localhost:5000/business',
  redirectUrl:
    process.env.NODE_ENV === 'production'
      ? 'm-dev.parllay.cn'
      : 'm-dev.parllay.cn'
}
//
export default Config
