import React from "react"
import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import "echarts-gl"

import world from "../assets/mapData/world.json"
echarts.registerMap("world", world)

const getRandomData = () => {
  return {
    coords: [
      [Math.random() * 135.2, Math.random() * 53.33],
      [121.51585, 31.23045],
    ],
    value: (Math.random() * 30).toFixed(2),
  }
}

const canvas = document.createElement("canvas")
const mapChart: any = echarts.init(canvas, undefined, {
  width: 2048,
  height: 1024,
})

const mapOption = {
  geo: {
    map: "world",
    label: {
      fontSize: 40,
    },
    itemStyle: {
      areaColor: "transparent",
      borderColor: "#00FDFF",
    },
    emphasis: {
      label: {
        color: "#ffffff",
      },
      itemStyle: {
        areaColor: "#e33e33",
      },
    },
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    boundingCoords: [
      [-180, 90],
      [180, -90],
    ],
  },
  series: [
    {
      type: "effectScatter",
      coordinateSystem: "geo",
      zlevel: 2,
      rippleEffect: {
        //涟漪特效
        period: 6, //动画时间，值越小速度越快
        brushType: "stroke", //波纹绘制方式 stroke, fill
        scale: 6, //波纹圆环最大限制，值越大波纹越大
      },
      symbol: "circle",
      symbolSize: 10,
      itemStyle: {
        normal: {
          show: false,
          color: "yellow",
        },
      },
      data: [[121.51585, 31.23045]], //也可以是 {name: 'aaa', value: [121,51585, 31.23045]}形式
    },
  ],
}

mapChart.setOption(mapOption)
let _data: any = []
for (let i = 0; i < 50; i++) {
  _data.push(getRandomData())
}

const option = {
  globe: {
    globeRadius: 80,
    baseTexture: require("../assets/images/earth.jpg"),
    heightTexture: require("../assets/images/earth-high.jpg"),
    environment: require("../assets/images/universe.jpg"),
    displacementScale: 0.1,
    shading: "lambert",
    light: {
      ambient: {
        color: "#fff",
        intensity: 0.6,
      },
      main: {
        intensity: 0.6,
        shadow: true,
      },
    },
    layers: [
      {
        type: "blend",
        texture: mapChart,
      },
    ],
  },
  series: [
    {
      name: "lines3D",
      type: "lines3D",
      coordinateSystem: "globe",
      effect: {
        show: true,
        period: 2,
        trailWidth: 1,
        trailLength: 0.5,
        trailOpacity: 1,
        trailColor: "#0087f4",
      },
      blendMode: "lighter",
      lineStyle: {
        width: 1,
        color: "#0087f4",
        opacity: 0,
      },
      data: _data,
      silent: false,
    },
  ],
}

const LoginBackground = () => {
  return <ReactEcharts style={{ height: '100%' }} option={option} />
}

export default LoginBackground
