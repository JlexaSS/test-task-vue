<template>
  <div class="post">
    <h1 class="post-title">Пост</h1>
    <div class="post-item">
      <div class="post-content">
        <h2 class="post-content__title">Данные поста</h2>
        <p class="post-content__item-title"><span>Заголовок:</span>  {{ POSTS[CURRENT_POST].title }}</p>
        <p class="post-content__item-text"><span>Текст поста:</span>  {{ POSTS[CURRENT_POST].body }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "PostPage",
  props: {
    idPost: {
      type: Number
    }
  },
  computed: {
    ...mapGetters([
        'POSTS',
        'CURRENT_POST'
    ]),
  },
  methods: {
    ...mapActions([
        'GET_ALL_POSTS_FROM_API',
        'SET_CURRENT_POST'
    ]),
  },
  mounted() {
    this.GET_ALL_POSTS_FROM_API()
        .then(response => {
          if(response.data){
            console.log('posts received')
          }
        })
    if (this.idPost > 0 && this.idPost !== this.CURRENT_POST) {
      this.SET_CURRENT_POST(this.idPost)
    }

  }
}
</script>

<style lang="scss">
  .post{
    padding-top: 14px;
    margin-left: 23px;
    &-title {
      font-family: Inter-Medium;
      font-weight: 500;
      font-size: 22px;
      line-height: 32px;
      margin-bottom: 24px;
    }
    &-item {
      margin-right: 37px;
      border-radius: 8px;
      box-shadow: 0 1px 5px rgba(21, 27, 38, 0.15);
      background-color: #FFFFFF;
    }
    &-content {
      margin-left: 20px;
      padding-top: 20px;
      margin-bottom: 30px;
    }
    &-content__title {
      font-family: Inter-Medium;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      margin-bottom: 30px;
    }
    &-content__item-title {
      margin-bottom: 30px;
      font-size: 14px;
      line-height: 140%;
    }
    &-content__item-title span,
    &-content__item-text span{
      font-family: Inter-Bold;
      font-weight: 700;
    }
    &-content__item-text {
      padding-bottom: 18px;
      font-size: 14px;
      line-height: 140%;
    }
  }
</style>