<template>
    <a-layout>
        <leftSider class="leftSider" :siderCollapsed="pd.siderCollapsed" />
        <a-layout class="layoutStyle" :style="layoutStyle">
            <!-- 头部 -->
            <layoutHeader @siderCollapsedChange="siderCollapsedChange" />
            <a-layout-content class="layoutContent">
                <keep-alive v-if="route.meta.keepAlive">
                    <router-view></router-view>
                </keep-alive>
                <router-view v-else></router-view>
            </a-layout-content>
            <a-layout-footer class="layoutFooter">
                下面
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router';
import { reactive, computed } from 'vue';

import layoutHeader from './layoutHeader.vue';
import leftSider from './leftSider.vue';

type PD = {
    siderCollapsed: boolean
}

const pd = reactive<PD>({
    siderCollapsed: false
})

const layoutStyle = computed(() => {
    return {
        marginLeft: pd.siderCollapsed ? "80px" : "200px"
    }
})


//伸缩左侧menus
const siderCollapsedChange = (flag: boolean) => {
    pd.siderCollapsed = flag
}

const route = useRoute()

</script>

<style lang='less' scoped>
.leftSider {
    overflow: 'auto';
    height: '100vh';
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0
}

.layoutStyle {
    transition: all 0.1s ease;
}

.layoutContent {
    // height: calc(~"50% - 100px");
    overflow: auto;
}

.layoutFooter {
    height: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
