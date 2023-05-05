<template>
    <a-layout-header class="layoutHeaderStyle">
        <div class="leftBox">
            <menu-unfold-outlined v-if="siderCollapsed" class="trigger"
                @click="handleChange" />
            <menu-fold-outlined v-else class="trigger" @click="handleChange" />
            <a-breadcrumb>
                <a-breadcrumb-item>Home</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <a-dropdown>
            <a-avatar class="avatarStyle">
            {{ userName }}
            </a-avatar>
            <template #overlay>
                <a-menu>
                    <a-menu-item key="1">个人中心</a-menu-item>
                    <a-menu-item key="2">退出账号</a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </a-layout-header>
</template>

<script setup lang='ts'>
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue';

// import { useRoute } from 'vue-router';
import { ref , computed } from 'vue';
//store - user
import { useUserStore } from '@/store/user.js'

const emits = defineEmits(['siderCollapsedChange']);

const handleChange = ()=>{
    siderCollapsed.value = !siderCollapsed.value
    emits('siderCollapsedChange', siderCollapsed.value);
}

//左侧选择
const siderCollapsed = ref<boolean>(false);

const userStore: any = useUserStore()

//名字的第一位
const userName = computed(() => userStore.name.charAt(0))


// const route = useRoute()
// console.log(route.meta);



</script>

<style lang='less' scoped>
.layoutHeaderStyle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px !important;
    height: 49px !important;
    line-height: 49px !important;
    color:#fff;
}
.leftBox{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.avatarStyle{
    color: #f56a00; 
    background-color: #fde3cf;
    cursor: pointer;
}
.trigger{
    width: 2em;
    height: 2em;
    line-height: 2.3em;
    margin-right: 10px;
}

</style>
