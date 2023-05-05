<template>
    <a-layout>
        <a-layout-sider :style='layoutSiderStyle' :trigger="null" :collapsed="siderCollapsed" collapsible>
            <div class="logo">
                LOGO
            </div>
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item key="1">
                    <user-outlined />
                    <span class="nav-text">nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <video-camera-outlined />
                    <span class="nav-text">nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <upload-outlined />
                    <span class="nav-text">nav 3</span>
                </a-menu-item>
                <a-menu-item key="4">
                    <user-outlined />
                    <span class="nav-text">nav 4</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout :style="{ overflow: 'hidden' , height: '100vh' }">
            <!-- 头部 -->
            <layoutHeader @siderCollapsedChange="siderCollapsedChange" />
            <a-layout-content :style="{ overflow: 'auto'}">
                <div class="layout-content">
                    <keep-alive v-if="route.meta.keepAlive">
                        <router-view></router-view>
                    </keep-alive>
                    <router-view v-else></router-view>
                </div>
                <a-layout-footer :style="{ background: '#fff' }">
                    下面
                </a-layout-footer>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

import layoutHeader from './layoutHeader.vue';


//icon
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';


//左侧选择
const selectedKeys =  ref<string[]>(['4']);

const siderCollapsed = ref<boolean>(false);
const siderCollapsedChange = (flag:boolean)=>{
    siderCollapsed.value = flag
}

//style
const layoutSiderStyle = ref({ overflow: 'auto', height: '100vh' })




const route = useRoute()

</script>

<style lang='less' scoped>
#components-layout-demo-responsive .logo {
    height: 32px;
    background: #fff;
    margin: 16px;
    color:#fff;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: @primary-color;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.layoutHeaderStyle{
    background:#fff;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

// .site-layout-sub-header-background {
//     background: #fff;
// }

// .site-layout-background {
//     background: #fff;
// }

// [data-theme='dark'] .site-layout-sub-header-background {
//     background: #141414;
// }
</style>
