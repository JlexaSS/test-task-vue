<template>
  <div class="app">
    <v-menu/>
    <h1>Hi, guys</h1>

  </div>
</template>

<script>
import vMenu from '@/components/v-menu'
export default {
  name: 'app',
  components: {
    vMenu
  }
}
</script>

<style lang="scss">
  .app {
    display: flex;
  }
</style>
