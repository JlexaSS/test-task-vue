<template>
  <nav
    class="menu"
    :class="{active: !IS_MENU_OPEN}"
  >
    <div class="menu-top">
      <router-link to="/" class="menu-top__logo">
        <img src="../../images/logo.svg" alt="logo">
      </router-link>
      <button
        class="menu-top__btn"
        @click="toggleMenu"
      >
        <img src="../../images/side-menu.svg" alt="menu-btn">
      </button>
    </div>
    <MenuItem
      v-for="menuItem in menuItems"
      :key="menuItems.name"
      :menuItemData="menuItem"
    />
    <div class="menu-bottom">
      <router-link to="/about" class="menu-bottom__link">
        <p class="menu-bottom__link-text">
          О нас
        </p>
      </router-link>
    </div>
  </nav>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem'
import menuItems from "@/components/menu/data";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "Menu",
  components: {
    MenuItem
  },
  data() {
    return {
      menuItems: menuItems
    }
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
.menu {
  position: sticky;
  min-width: 240px;
  height: 100vh;
  background-color: #21282F;
  transition: margin-left .3s ease;

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

  &-bottom__link {
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
  }

  &-bottom__link-text{
    margin: 20px 0 20px 24px;
  }

  &-bottom {
    border-top: 1px solid rgba(111, 119, 130, .4);
    width: 100%;
    position: absolute;
    bottom: 0;
  }
}
.active {
  margin-left: -240px;
}
</style>