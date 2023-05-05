<template>
    <template v-for="menu in props.menuInfo">
        <template v-if="!menu.children || menu.children.length <= 1">
            <a-menu-item :key="menu.name" @click="clickMenu(menu)">
                <template #icon v-if="menu.meta.icon">
                    <component :is="menu.meta.icon"></component>
                </template>
                {{ menu.meta.title }}
            </a-menu-item>
        </template>
        <template v-else>
            <a-sub-menu :key="menu.name">
                <template #icon v-if="menu.meta.icon">
                    <component :is="menu.meta.icon"></component>
                </template>
                <template #title>
                    {{ menu.meta.title }}
                </template>
                <menuItem :menuInfo="menu.children"></menuItem>
            </a-sub-menu>
        </template>
    </template>     
</template>

<script setup lang='ts' name="menuItem">
import { useRouter } from 'vue-router';
interface Props {
    menuInfo: any;
}
const props = withDefaults(defineProps<Props>(), {});

const router = useRouter()
const clickMenu = (r:any)=>{
    const routerName = r.name;
    router.push({
        name: routerName,
    });
}

</script>

<style lang='less' scoped>

</style>