<template>
  <div class="menu-item">
    <p class="menu-item__title">{{ menuItemData.title }}</p>
    <router-link :to="menuLinks.linkname"
      class="menu-item__content"
      v-for="menuLinks of menuItemData.items"
      :key="menuLinks.name"
      :menuLinks="menuLinks"
    >
      <img :src=" require('../../images/' + menuLinks.image)" alt="">
      <span class="menu-item__text">{{menuLinks.text}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    menuItemData: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
  .menu-item {
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    margin-bottom: 12px;
    border-top: 1px solid rgba(111, 119, 130, .4);
    &__content{
      display: flex;
      align-items: center;
      padding: 6px 24px;
      transition: background-color .5s ease;
    }
    &__title{
      text-transform: uppercase;
      padding-left: 24px;
      margin-top: 0;
      margin-bottom: 12px;
      font-family: Inter-Medium;
      font-weight: 500;
      font-size: 10px;
      line-height: 10px;
      color: #6F7782;
    }
    &__text {
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      margin-left: 10px;
    }
  }
  .router-link-active {
    background-color: #434A51;
  }
</style>