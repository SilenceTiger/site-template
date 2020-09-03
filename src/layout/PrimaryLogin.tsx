import React from "react"
import LoginForm from "./LoginForm"
import LoginBackground from "./LoginBackground"

const LoginLayout = () => {
  return (
    <div className="login-layout">
      <LoginBackground />
      <LoginForm />
    </div>
  )
}

export default LoginLayout
