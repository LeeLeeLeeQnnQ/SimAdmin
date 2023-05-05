<template>
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
    <div>计算的名字：{{ userStore.fullName }}</div>
    <div>app的config: {{ appStore.config }}</div>
    <a-button @click="updateUserState" type="primary">更新数据</a-button>
    <hr>
    svg icon
    <svg-icon name="vue" className="icon-s" color="#eee" />
    <svg-icon name="vue" className="icon-m" color="#eee" />
    <svg-icon name="vue" className="icon-l" color="#eee" />
    <svg-icon name="vue" className="icon-xl" color="#eee" />
    <svg-icon name="vue" className="icon-xxl" color="#eee" />

    <hr>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
                            <br>
                            12
</template>

<script setup lang="ts">
//store - app
import { useAppStore } from '@/store/app.js'
//store - user
import { useUserStore } from '@/store/user.js'
// pinia 转绑定函数
import { storeToRefs } from 'pinia'

import { computed } from 'vue'

//接受
const userStore:any = useUserStore()
const appStore:any = useAppStore()

const name = computed(() => userStore.name)

const { age } = storeToRefs(userStore)

const updateUserState = () => {
    const { name, age } = userStore.$state
    userStore.updateState({
        name: name + 'Sim',
        age: age + 1
    })
}
</script>

<style lang="less" scoped></style>
