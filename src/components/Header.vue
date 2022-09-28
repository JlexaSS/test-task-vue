<template>
  <div class="header">
    <button
      class="header-menu__btn"
      v-if="!IS_MENU_OPEN"
      @click="toggleMenu"
    >
      <img src="../images/menu-btn.svg" alt="menu-btn">
    </button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Header",
  props: {
  },
  computed: {
    ...mapGetters([
        'IS_MENU_OPEN'
    ])
  },
  methods: {
    ...mapActions([
        'TOGGLE_MENU'
    ]),
    toggleMenu() {
      this.TOGGLE_MENU();
    }
  }
}
</script>

<style lang="scss">
.header {
  background-color: #FFFFFF;
  width: 100%;
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