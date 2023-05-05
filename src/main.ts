import { createApp } from 'vue'
import router from './router'
import store from './store'
import './mock/index.js'
//svg
import 'virtual:svg-icons-register' // 引入注册脚本
import SvgIcon from './components/svgIcon/index.vue' // 引入组件


// antd
//import { DatePicker, Button } from 'ant-design-vue';

import App from './App.vue'
const app = createApp(App)

//antd use
// app.use(DatePicker);
// app.use(Button);

//svg
app.component('svg-icon', SvgIcon)


//store
app.use(store)


//router
app.use(router)

app.mount('#app')
