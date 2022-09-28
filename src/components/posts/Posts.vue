<template>
  <div class="posts">
    <h1 class="posts-title">Список постов</h1>
    <div class="posts-list">
      <div class="posts-list__content">
        <h2 class="posts-list__content-title">Посты</h2>
          <div class="posts-list__content-items">
            <PostsItem
                v-for="post of POSTS"
                :key="post.id"
                :post="post"
            />
          </div>
      </div>
      <button
        class="posts-list__content-btn"
        @click="getMorePosts"
      >
        <img src="../../images/arrow.svg" alt="arrow">
        Загрузить еще
      </button>
    </div>
  </div>
</template>

<script>
import PostsItem from "@/components/posts/PostsItem";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Posts",
  components: {
    PostsItem
  },
  data() {
    return {
      page: 2
    }
  },
  computed: {
    ...mapGetters([
      'POSTS'
    ])
  },
  methods: {
    ...mapActions([
        'GET_POSTS_FROM_API',
        'GET_MORE_POSTS_FROM_API'
    ]),
    getMorePosts() {
      this.GET_MORE_POSTS_FROM_API(this.page)
      this.page++
    }
  },
  mounted() {
    this.GET_POSTS_FROM_API()
        .then(response => {
          if(response.data){
            console.log('posts received')
          }
        })
  }

}
</script>

<style lang="scss">
  .posts{
    padding-top: 14px;
    margin-left: 23px;
    &-title {
      font-family: Inter-Medium;
      font-weight: 500;
      font-size: 22px;
      line-height: 32px;
      margin-bottom: 24px;
    }
    &-list {
      margin-right: 37px;
      border-radius: 8px;
      box-shadow: 0 1px 5px rgba(21, 27, 38, 0.15);
      background-color: #FFFFFF;
    }
    &-list__content-items {
      max-height: 52vh;
      overflow: auto;
      scrollbar-width: none;
    }
    &-list__content {
      margin-left: 20px;
      padding-top: 20px;
      margin-bottom: 30px;
    }
    &-list__content-title {
      font-family: Inter-Medium;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
    }
    &-list__content-btn {
      display: flex;
      align-items: center;
      margin: 0 auto;
      padding-bottom: 20px;
      color: #329EFF;
      background-color: transparent;
      border: 0;
      cursor: pointer;
    }
    &-list__content-btn img {
      padding-right: 8px;
    }
  }

</style>