import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import axios from "axios";
import "./styles/index.scss";
/**
 * 修复Student表格窗口拖拽报错bug.
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};
const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor(callback) {
    callback = debounce(callback, 16);
    super(callback);
  }
};

const app = createApp(App);
// 配置vue全局属性,可以在所有的组件中使用.
app.config.globalProperties.$axios = axios;
//添加全局$msg变量
app.provide("$msg", "Hello");
//添加全局$myGlobalData对象
app.config.globalProperties.$myGlobalData = { age: 1 };
//添加全局$myGlobalMethod方法
app.config.globalProperties.$myGlobalMethod = function () {
  console.log("This is a global method!");
};
app.use(ElementPlus, {locale: zhCn})
app.use(router);
app.mount("#app");
