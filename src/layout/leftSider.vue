<template>
    <a-layout-sider class='layoutSiderStyle' :trigger="null" :collapsed="props.siderCollapsed" collapsible>
        <div class="logo">
            LOGO
        </div>
        <treeMenu :routerConfig="routerConfig"></treeMenu>
    </a-layout-sider>
</template>

<script setup lang='ts' name="leftSider">
import treeMenu from './components/treeMenu.vue';
import { routerConfig } from '@/router/config';
interface Props {
    siderCollapsed: boolean;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<style lang='less' scoped>
.layoutSiderStyle {
    overflow: 'auto';
    height: '100vh';
}

.logo {
    padding: 10px 0;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: aliceblue;
}
</style>