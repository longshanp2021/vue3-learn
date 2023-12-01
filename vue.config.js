const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //scss全局变量配置
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'), // 使用Sass作为实现
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "./src/styles/theme.scss";
        `,
      },
    },
  },
});
