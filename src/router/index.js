import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from "@/components/posts/Posts";
import PostPage from "@/components/posts/PostPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/post-page',
    name: 'PostPage',
    component: PostPage,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
