import {
  HomeOutlined,
  CodepenOutlined,
} from "@ant-design/icons"
export default [
  {
    name: "Home",
    key: "/app/home",
    icon: HomeOutlined,
  },
  {
    name: "Three",
    key: "/three",
    icon: CodepenOutlined,
    subMenu: [{
      name: "Simple Earth",
      key: "/app/three",
    }]
  }
]
