<template>
  <div class="header">
    <button
        class="header-menu__btn"
        v-if="!isOpen"
        @click="showNavbar">
      <img src="../images/menu-btn.png" alt="menu-btn">
    </button>
  </div>
</template>

<script>
export default {
  name: "v-header",
  props: {
    isOpen: {
      type: Boolean
    }
  },
  methods: {
    showNavbar(){
      this.$emit('showNavbar')
    }
  }
}
</script>

<style lang="scss">
.header {
  background-color: #FFFFFF;
  height: 60px;
  &-menu__btn {
    width: 15px;
    height: 13px;
    margin: 24px 0 23px 20px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
}

</style>