<template>
  <div class="box1">
    <h1>Student</h1>
    <div class="parentBorder">
      <el-form :model="form" label-width="50px" :inline="true">
        <el-form-item label="日期">
          <el-date-picker
            v-model="form.date"
            type="date"
            placeholder="请选择日期"
            clearable
          />
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="地址">
          <el-select v-model="form.address" placeholder="请选择住址">
            <el-option label="上海市" value="shanghai" />
            <el-option label="北京市" value="beijing" />
            <el-option label="天津市" value="tianjin" />
            <el-option label="武汉市" value="wuhan" />
            <el-option label="深圳市" value="shenzhen" />
            <el-option label="广州市" value="guangzhou" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="query">查询</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      v-loading="loading"
      element-loading-text="加载中..."
      element-loading-svg-view-box="-10, -10, 50, 50"
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      table-layout="fixed"
      :border="true"
    >
      <el-table-column type="selection" />
      <el-table-column label="Date">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column property="name" label="Name" />
      <el-table-column
        property="address"
        label="Address"
        show-overflow-tooltip
      />
      <el-table-column fixed="right" label="操作" width="140">
        <template #default>
          <el-button type="primary" size="small" @click="editData"
            >编辑</el-button
          >
          <el-popconfirm
            title="确认删除吗? "
            @confirm="confirmEvent"
            @cancel="cancelEvent"
          >
            <template #reference>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      v-model="centerDialogVisible"
      title="学生信息编辑"
      width="40%"
      align-center
    >
      <span>学生信息</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            保存
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      multipleSelection: [],
      tableData: [
        {
          date: "2016-05-03",
          name: "小明",
          address: "北京市",
        },
        {
          date: "2016-05-02",
          name: "汤米",
          address: "上海市",
        },
        {
          date: "2016-05-04",
          name: "汤姆",
          address: "天津市",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-08",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-06",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-07",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      form: {
        name: "",
        address: "",
        date: "",
      },
      loading: false,
      centerDialogVisible: false,
    };
  },
  watch: {
    todo: {
      immediate: true,
      handler() {
        // console.log(this.$route.params);
      },
    },
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
    query() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1500);
      console.log(this.form);
    },
    reset() {
      this.form = { name: "", address: "", date: "" };
    },
    confirmEvent() {
      console.log("删除");
    },
    cancelEvent() {
      console.log("取消");
    },
    editData() {
      this.centerDialogVisible = true;
    },
  },
};
</script>

<style>
.box1 {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
