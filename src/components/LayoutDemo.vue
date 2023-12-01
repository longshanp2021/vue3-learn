<template>
  <div class="LayoutDemo">
    <h1>LayoutDemo</h1>
    <el-row>
      <el-col :span="24"><div class="grid-content ep-bg-purple-dark" /></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="12"
        ><div class="grid-content ep-bg-purple-light"
      /></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple-light" /></el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple-light" /></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple-light" /></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple-light" /></el-col>
    </el-row>
  </div>
</template>

<style scoped>
.LayoutDemo {
  width: 100%;
  padding: 0 8px;
}
.el-row {
  background: rgb(189, 186, 186);
  margin-bottom: 20px;
  border-radius: 2px;
}
.ep-bg-purple-light {
  background: gainsboro;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
