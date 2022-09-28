<template>
  <div class="app">
    <Menu/>
    <div class="app-content">
      <Header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/menu/Menu'
import Header from '@/components/Header'
export default {
  name: 'app',
  components: {
    Menu, Header
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .app {
    display: flex;
    height: 100vh;
    background-color: #E8E8E8;
    &-content {
      width: 100%;
    }
  }
</style>
