import React, { useState } from 'react'
import { Layout } from "antd"
import PrimaryMenu from "./PrimaryMenu"
import PrimaryHeader from "./PrimaryHeader"
import PrimaryContent from "./PrimaryContent"

const { Sider } = Layout
export const LayoutContext = React.createContext({} as any)

const PrimaryLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <LayoutContext.Provider value={{ collapsed, toggleCollapse }}>
      <Layout className="primary-layout">
        <Sider
          className="primary-sider"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <PrimaryMenu />
        </Sider>
        <Layout>
          <PrimaryHeader />
          <div className="primary-content">
            <PrimaryContent />
          </div>
        </Layout>
      </Layout>
    </LayoutContext.Provider>)
}

export default PrimaryLayout