import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import animated from 'animate.css';

createApp(App).use(Antd).use(animated).mount('#app')
