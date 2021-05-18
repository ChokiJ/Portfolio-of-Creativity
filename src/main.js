import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import animated from 'animate.css';
import { createRouter, createWebHistory } from 'vue-router'
import anime from 'animejs'

import Cover from './components/Cover.vue';
import Page1 from './components/Page1.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', component: Cover }, { path: '/1', component: Page1 }],
})

createApp(App).use(anime).use(router).use(Antd).use(animated).mount('#app')
