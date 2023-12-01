<template>
  <div class="container">
    <div class="box">
      <div class="header">
        <div class="meum">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            destroy-on-close="true"
          >
            <el-menu-item index="Home">Home</el-menu-item>
            <el-sub-menu index="School">
              <template #title>School</template>
              <el-menu-item index="Teacher">Teacher</el-menu-item>
              <el-menu-item index="Student">Student</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="Personal">Personal</el-menu-item>
            <el-menu-item index="LayoutDemo">LayoutDemo</el-menu-item>
          </el-menu>
        </div>
        <div class="op">
          <el-select v-model="value" class="m-2" size="large">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              @click="handle(item.value)"
            />
          </el-select>

          <el-drawer v-model="drawer" title="修改密码" :with-header="true">
            <el-form :model="form" label-width="50px">
              <el-form-item label="密码">
                <el-input v-model="form.password" />
              </el-form-item>
              <el-button type="primary" @click="onSubmit">save</el-button>
              <el-button @click="cancel">cancel</el-button>
            </el-form>
          </el-drawer>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
export default {
  name: "Layout",
  components: {},
  data() {
    return {
      options: [
        { value: "修改密码", label: "修改密码" },
        { value: "退出登录", label: "退出登录" },
        { value: "账号注销", label: "账号注销" },
      ],
      drawer: false,
      value: "operation",
      form: {
        password: "",
      },
      activeIndex: "",
    };
  },
  created() {
    // const regex = /#(.*)/;
    // const regex2 = /\/(?:[^\/]*\/){3}([^\/]*)\//;
    // const match = window.location.href.match(regex);
    // if (match) {
    //   this.activeIndex = match[1].substring(1);
    // }
  },
  methods: {
    onSubmit() {
      ElMessage({
        message: `修改成功, 密码修改为: ${this.form.name}`,
        type: "success",
        // grouping: true, //分组提示
      });
    },
    cancel() {
      this.drawer = false;
    },
    handle(value) {
      console.log(this.value);
      if (value === "修改密码") {
        this.drawer = true;
      }
      if (value === "退出登录") {
        ElMessage({
          message: `账号已退出`,
          type: "success",
          // grouping: true, //分组提示
        });
        this.$router.push("/Login");
      }
      if (value === "账号注销") {
        this.$router.push("/Login");
        ElMessage({
          // showClose: true,//展开关闭对话框
          message: "账号已注销!",
          type: "warning",
        });
      }
      this.value = "operation";
    },
    handleSelect(key, keyPath) {
      if (key === "Student") {
        this.$router.push(`/Layout/Student/小明/and/${new Date().getTime()}`);
      } else {
        this.$router.push(`/Layout/${key}`);
      }
    },
  },
};
</script>

<style>
.container {
  width: 100%;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.meum {
  width: 36vw;
}

.content {
  display: flex;
  flex: 1;
  border-radius: 3px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
