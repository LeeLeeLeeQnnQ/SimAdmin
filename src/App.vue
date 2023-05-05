<template>
  <router-view />
</template>

<script setup lang="ts">
// 静态资源的使用
// import img from '@/assets/images/图片.jpg' // 返回图片资源路径
// import demo from './demo.tsx?url' // 显式加载资源为一个 URL
// import test from '@/test/test?raw' // 以字符串形式加载资源
// import Worker from '@/test/worker?worker' // 如果是计算量很大的代码，可以使用 worker ，开启新的线程加载，与主线程通信
// import jsonText from '@/test/jsonText.json' // 读取 json 文件
// console.log('静态图片--', img)
// console.log('显式加载资源的url--', demo)
// console.log('以字符串形式加载资源--', `类型${typeof test}`, test)
// console.log('读取json--', jsonText)

// const worker = new Worker()
// worker.onmessage = function (e) {
//   console.log('worker监听---', e)
// }

// import.meta.url 获取到的是当前页面完整 url 地址
// new URL 中必须填写相对路径  不支持中文
// 动态引用资源
// new URL('../assets/images/png/year.png', import.meta.url).href

</script>

<style lang="less">
  //引入全局样式变量
  @import "./assets/theme.less";
</style>
