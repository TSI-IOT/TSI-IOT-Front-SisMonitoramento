import Vue from 'vue'
import VueRouter from 'vue-router'


import login from "../app/components/login";
import menu from "../app/components/menu";
import carGroup from "../group/views/carGroup";
import listGroup from "../group/views/listGroup";
import cardDevice from "../device/views/cardDevice";
import listDevice from "../device/views/listDevice";
import cadDevice from "../device/views/cadDevice";


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: "/listGroup",
        name: "listGroup",
        component: listGroup
    },
    {
        path: '/cardGroup',
        name: 'cardGroup',
        component: carGroup
    },
    {
        path: '/cardDevice',
        name: 'cardDevice',
        component: cardDevice
    },
    {
        path: '/listDevice',
        name: 'listDevice',
        component: listDevice
    },{
        path: '/cadDevice',
        name: 'cadDevice',
        component: cadDevice
    },
    {
        path: '/menu',
        name: 'menu',
        component: menu
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
