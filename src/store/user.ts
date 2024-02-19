import { makeObservable, observable, action } from 'mobx'
import { login, getInfo, type LoginProp } from '@/api/user'
class UserStore {
  userInfo = {}
  constructor() {
    makeObservable(this, {
      userInfo: observable,
      login: action,
      getInfo: action,
    })
  }
  login = (form: LoginProp) => {
    return login(form)
  }
  getInfo = () => {
    return getInfo().then((res) => {
      console.log(res)
      return res
    })
  }
}

export default new UserStore()
