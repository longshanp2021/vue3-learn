<template>
  <div class="login">
    <div class="loginForm">
      <h2>登录</h2>
      <div class="loginBtn">
        <el-form :model="form" label-width="120px" :inline="true">
          <el-form-item label="账号">
            <el-input v-model="form.userName" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" />
          </el-form-item>
        </el-form>
        <div class="button">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
export default {
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    loginSucceed() {
      ElMessage({
        message: "账号密码正确, 登录成功.",
        type: "success",
      });
      this.$router.push("/Layout/Home");
    },
    loginFailed() {
      ElMessage.error("账号密码错误, 登录失败.");
      this.$router.push("/Layout/Home");
    },
    onSubmit() {
      console.log(this.form.userName, this.form.password);
      ElMessage({
        message: "账号密码正确, 登录成功.",
        type: "success",
      });
      this.$router.push("/Layout/Home");
    },
  },
};
</script>

<style scoped>
.login {
  background-image: url("../assets/login.jpg");
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.loginForm {
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 21vw;
  align-items: center;
  background: #70a7d5;
  border-radius: 5px;
  width: 400px;
  height: 400px;
}
.loginBtn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button {
  display: flex;
}
</style>
