import axios from "axios"
import { message } from "antd"
// import { getLoginInfo } from "@/utils"
// import Bus from "@/utils/bus"

const http = axios.create({
  timeout: 30000,
})

http.interceptors.request.use((config) => {
  const curTime = new Date().getTime()
  if (config.method === "get") {
    config.params = config.params ? config.params : {}
    config.params.__t = curTime
  }
  config.withCredentials = false
  const loginInfo = getLoginInfo()
  if (loginInfo && loginInfo.id && loginInfo.token) {
    config.headers.common.userId = loginInfo.id
    config.headers.common.Authorization = 'Bearer ' + loginInfo.token
  }
  config.url = "/api/v1" + config.url
  return config
})

http.interceptors.response.use(
  (response) => {
    // msg is Token过期了
    if (response.data?.code === 401) {
      Bus.emit("TOKEN_OVERDUE")
      return Promise.reject("TOKEN失效")
    }
    if (
      response.data?.code !== 200 &&
      response.config.responseType !== "blob"
    ) {
      // 返回blob类型时，没有code字段
      response.data?.msg && message.error(response.data.msg)
      return Promise.reject(response.data.msg)
    }
    return response.data
  },
  () => {
    message.error("连接服务器失败")
    return Promise.reject("连接服务器失败")
  }
)

export default http
