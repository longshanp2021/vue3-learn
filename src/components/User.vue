<template>
  <div>
    <h1>User</h1>
    <!-- <button @click="getRouteParams">获取路由参数</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  beforeCreate() {
    console.log(this.$route.params);
  },
  // watch: {
  //   todo: {
  //     immediate: true,
  //     handler() {
  //       console.log(this.$route.params);
  //     },
  //   },
  // },
  // methods: {
  //   getRouteParams() {
  //     console.log(this.$route.params);
  //   },
  // },
  /**
   * 正如其名,vue-router提供的导航守卫主要用来通过跳转或取消的方式守卫导航,这里有很多方式植入路由导航中:全局的,单个路由独享,或者组件级的
   */
};
</script>
