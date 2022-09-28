const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
},{
  css: {
    loaderOptions: {
      additionalData: `@import "@/assets/styles/styles.scss`
    }
  }
  }
)
