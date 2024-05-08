import { defineStore } from 'pinia'
import { loginForm, loginResponseData } from '@/api/user/type'
import { login, userInfo } from '@/api/user/index'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes'

let useUserStore = defineStore('User', {
  state: () => {
    return {
      token: GET_TOKEN(),
      username: '',
      menuRoutes: constantRoute,
    }
  },
  actions: {
    async userLogin(loginForm: loginForm) {
      let result: loginResponseData = await login(loginForm)
      if (result.code == 200) {
        this.token = result.data
        // 本地存储持久化存储一份
        SET_TOKEN(result.data as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },
})

export default useUserStore
