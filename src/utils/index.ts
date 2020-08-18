export const setLoginInfo = (info: any) => {
  localStorage.setItem('LOGIN_INFO', JSON.stringify(info))
}

export const getLoginInfo = () => {
  return JSON.parse(localStorage.getItem('LOGIN_INFO') || '{}')
}