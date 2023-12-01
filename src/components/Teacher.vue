<template>
  <div class="hello">
    <h1>Teacher</h1>
    <el-button @click="goToUser">goToUser</el-button>
  </div>
</template>

<script>
export default {
  name: "Teacher",
  props: {
    msg: String,
  },
  inject: ["$msg"],
  data() {
    return {
      time: new Date().getTime(),
      hello: this.$msg,
    };
  },
  created() {
    // console.log(this.$myGlobalData);
    // this.$myGlobalMethod()
  },
  computed: {},
  methods: {
    goToUser() {
      this.$router.push(`/Layout/User/${this.time}`);
    },
  },
};
</script>

<style scoped></style>
