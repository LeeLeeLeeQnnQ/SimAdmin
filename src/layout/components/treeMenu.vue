<template>
    <a-menu v-model:openKeys="pd.openKeys" v-model:selectedKeys="pd.selectedKeys" theme="dark" mode="inline">
        <menuItem :menuInfo="props.routerConfig"></menuItem>
    </a-menu>
</template>

<script setup lang='ts' name="treeMenu">

import { RouteRecordName, useRoute } from 'vue-router';

import menuItem from './menuItem.vue';
import { watch ,reactive } from 'vue'
interface Props {
    routerConfig: Array<any>;
}
const props = withDefaults(defineProps<Props>(), {});

const route = useRoute()

type PD = {
    selectedKeys: (RouteRecordName | null | undefined)[],
    openKeys: (RouteRecordName | undefined)[]
}

const pd = reactive<PD>({
    selectedKeys:[],
    openKeys: []
})

//监视路由变化 并在左侧体现
watch(route,(rt)=>{
    const matched = rt.matched || []
    pd.openKeys = matched.map(i => i.name)
    pd.selectedKeys = []
    pd.selectedKeys.push(rt.name)
},{
    immediate:true
})

</script>

<style lang='less' scoped>

</style>