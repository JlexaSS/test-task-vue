import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuOpen: false,
    posts: [],
    currentPost: 1
  },
  getters: {
    IS_MENU_OPEN(state) {
      return state.isMenuOpen;
    },
    POSTS(state) {
      return state.posts;
    },
    POST_BY_ID: (state) => (idPost) => {
      return state.posts.find(item => item.id === idPost)
    },
    CURRENT_POST(state) {
      return state.currentPost;
    }
  },
  mutations: {
    CHANGE_IS_MENU_OPEN: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    SET_POSTS_TO_STATE: (state, posts) => {
      state.posts = posts;
    },
    ADD_POSTS_TO_STATE: (state, posts) => {
      state.posts = state.posts.concat(posts);
    },
    SET_CURRENT_POST_TO_STATE: (state, idPost) => {
      state.currentPost = idPost-1;
    }
  },
  actions: {
    TOGGLE_MENU({commit}) {
      commit('CHANGE_IS_MENU_OPEN')
    },
    GET_ALL_POSTS_FROM_API({commit}){
      return axios('https://jsonplaceholder.typicode.com/posts', {
        method: "GET"
      })
          .then(posts => {
            commit('SET_POSTS_TO_STATE', posts.data)
            return posts;
          })
          .catch(error => {
            console.log(error)
            return error;
          })
    },
    GET_POSTS_FROM_API({commit}) {
      return axios('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5', {
        method: "GET"
      })
          .then(posts => {
            commit('SET_POSTS_TO_STATE', posts.data)
            return posts;
          })
          .catch(error => {
            console.log(error)
            return error;
          })
    },
    GET_MORE_POSTS_FROM_API({commit}, page){
      return axios(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`, {
        method: "GET"
      })
          .then(posts => {
            commit('ADD_POSTS_TO_STATE', posts.data)
            return posts;
          })
          .catch(error => {
            console.log(error)
            return error;
          })
    },
    SET_CURRENT_POST({commit}, idPost) {
      commit('SET_CURRENT_POST_TO_STATE', idPost)
    }
  }
})
