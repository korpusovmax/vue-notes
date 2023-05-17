import { createApp } from 'vue'
import {createMemoryHistory, createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import Note from "@/Note.vue";
import Home from "@/Home.vue";

const app = createApp(App);

const routes = [
    { path: '/', component: Home },
    { path: '/note/:id', component: Note },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


app.use(router)
app.mount('#app')
