import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from "@/components/posts/Posts";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
