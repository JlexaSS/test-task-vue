<template>
  <nav class="menu">
    <div class="menu-top">
      <a href="#" class="menu-top__logo">
        <img src="../images/logo.png" alt="logo">
      </a>
      <button class="menu-top__btn" @click="hideNavbar">
        <img src="../images/side-menu.png" alt="menu-btn">
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "v-menu",
  methods: {
    hideNavbar() {
      this.$emit('hideNavbar');
    }
  }
}
</script>

<style lang="scss">
.menu {
  position: fixed;
  width: 240px;
  height: 100vh;
  background-color: #21282F;

  &-top {
    display: flex;
    align-items: center;
    padding-top: 18px;
    padding-left: 24px;
    margin-bottom: 18px;
  }

  &-top__btn {
    width: 24px;
    height: 24px;
    margin-left: 45px;
    margin-bottom: 5px;
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
}
</style>