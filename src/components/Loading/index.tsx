import React from 'react'
import {
  LoadingOutlined,
} from "@ant-design/icons"

interface LoadingProps {
  backgroundColor?: string
  color?: string
}

const Loading: React.FC<LoadingProps> = ({ backgroundColor, color }) => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: backgroundColor || '#ffffff',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: color || '#00a2ff',
      zIndex: 999
    }}><LoadingOutlined style={{ fontSize: 36 }} /></div>
  )
}
export default Loading
