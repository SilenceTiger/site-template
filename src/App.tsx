import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Redirect, Route } from "react-router-dom"
import { ConfigProvider } from "antd"
import zhCN from "antd/es/locale/zh_CN"
import PrimaryLayout from "./layout/PrimaryLayout"
import PrimaryLogin from './layout/PrimaryLogin'
import { getLoginInfo } from 'utils'

export const GlobalContext = React.createContext({} as any)


const App: React.FC = () => {
  const [loginInfo, setLoginInfo] = useState<any>(getLoginInfo())
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    setIsAuthenticated(!!loginInfo.isLogin)
  }, [loginInfo.isLogin])
  return (
    <ConfigProvider locale={zhCN}>
      <GlobalContext.Provider value={{ loginInfo, setLoginInfo }}>
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/home" />} />
            <Route exact path="/app" render={() => <Redirect to="/app/home" />} />
            <PrivateRoute path="/app" component={PrimaryLayout} />
            <PublicRoute path="/login" component={PrimaryLogin} />
          </Switch>
        </HashRouter>
      </GlobalContext.Provider>
    </ConfigProvider>
  )

  // 处理路由
  function PrivateRoute({ component, ...rest }: any) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location,
                  },
                }}
              />
            )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }: any) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
              React.createElement(component, props)
            )
        }
      />
    );
  }
}

export default App
