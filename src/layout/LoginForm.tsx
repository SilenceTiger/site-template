import React, { useContext } from "react"
import { Form, Input, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { GlobalContext } from '../App'
import { setLoginInfo } from 'utils'
const LoginForm = () => {
  const globalContext = useContext(GlobalContext)

  const onFinish = (params: any) => {
    if (params.username === "admin" && params.password === "123") {
      const loginInfo = {
        username: '超级赛尔人',
        isLogin: true
      }
      setLoginInfo(loginInfo)
      globalContext.setLoginInfo(loginInfo)
    }
  }
  return (
    <div className="login-form">
      <div className="title">React Visual Admin</div>
      <Form
        name="login-form"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="login-icon" />} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password autoComplete="new-password" prefix={<LockOutlined className="login-icon" />} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
            }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm
