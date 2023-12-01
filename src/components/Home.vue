<template>
  <div class="home">
    <h1>Home</h1>
    <div class="calendar">
      <el-calendar v-model="value" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: true,
      value: new Date(),
      currentTime: "",
    };
  },
  created() {},
  watch: {
    // todo: {
    //   immediate: true,
    //   handler() {
    //     setTimeout(() => {}, 3000);
    //   },
    // },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .calendar {
    width: 50vw;
  }
}
</style>
