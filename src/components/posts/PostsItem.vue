<template>
  <router-link :to="{name: 'PostPage', params: {idPost: post.id}}" class="posts-item">
    <p class="posts-item__title">{{ post.title.substring(0, 34) }}...</p>
    <p class="posts-item__text">{{ post.body.substring(0, 60) }}...</p>
  </router-link>
</template>

<script>
export default {
  name: "PostsItem",
  props:{
    post: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
  .posts-item {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-right: 20px;
    padding: 10px;
    border-top: 1px solid #E9ECEE;
    background-color: #FFFFFF;
    color: #000000;
    &__title {
      width: 50%;
    }
    &__text {
      width: 50%;
    }
  }

</style>