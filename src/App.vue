<template>
  <div class="app">
    <v-menu
        v-if="isOpen"
        @hideNavbar="toggleNavbar"
    />
    <div class="app-top"
         :class="{main: isOpen}"
    >
      <v-header
          :isOpen="isOpen"
          @showNavbar="toggleNavbar"
      />
      <div class="app-content">
        <h2>Здарова</h2>
      </div>
    </div>
  </div>
</template>

<script>
import vMenu from '@/components/v-menu'
import vHeader from '@/components/v-header'
export default {
  name: 'app',
  components: {
    vMenu, vHeader
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss">
  .app {
    height: 100vh;
    background-color: #E8E8E8;
    overflow: hidden;
  }
  .main {
    transform: translateX(240px);
    width: calc(100vw - 240px);
  }
</style>
