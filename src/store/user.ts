import { defineStore } from 'pinia'
import { useAppStore } from './app'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: 'Sim',
      age: 9
    }
  },
  getters: {
    fullName: (state) => {
      return state.name + 'Som'
    }
  },
  actions: {
    updateState(data:any) {
      this.$state = data
      this.updateAppConfig()
    },
    updateAppConfig() {
      const appStore = useAppStore()
      appStore.setData('user给你的设置')
    }
  },
  // 开启数据缓存
  persist: <any>{
    key: 'user',
    // 数据存储位置，默认为 localStorage
    storage: sessionStorage, 
    // 用于部分持久化状态的点表示法路径数组，表示不会持久化任何状态（默认为并保留整个状态）
    // paths: ['name'], 
    overwrite: true
  }
})
