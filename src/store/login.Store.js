import { makeAutoObservable } from 'mobx'

import { http } from '@/utils'
class LoginStore {
  token = ''
  constructor() {
    //响应式
    makeAutoObservable(this)
  }
  getToken = async ({ mobile, code }) => {
    //调用登录接口
    // 存入token
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code,
    })
    this.token = res.data.token
  }
}
export default LoginStore