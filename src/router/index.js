import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
/**
 *  静态导入->应用大量加载,影响页面加载.
 */
// import Teacher from "../components/Teacher.vue";
// import Personal from "../components/Personal.vue";
// import Home from "../components/Home.vue";
// import PageNotFoundComponent from "../components/404.vue";
// import Student from "../components/Student.vue";
// import User from "../components/User.vue";
// import Login from "../components/Login.vue";

/**
 *  动态导入->按需导入,减少应用页面加载.
 */
const Home = () => import("../components/Home.vue");
const Teacher = () => import("../components/Teacher.vue");
const Personal = () => import("../components/Personal.vue");
const PageNotFoundComponent = () => import("../components/404.vue");
const Student = () => import("../components/Student.vue");
const User = () => import("../components/User.vue");
const Login = () => import("../components/Login.vue");
const Layout = () => import("../components/Layout.vue");
const LayoutDemo = () => import("../components/LayoutDemo.vue");


const routes = [
  {
    path: "/Login",
    component: Login,
    name: "Login",
    meta: {
      // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    },
  },
  {
    path: "",
    component: Layout,
    name: "Layout",
    meta: {
      // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    },
  },
  {
    path: "/Layout",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "Home",
        component: Home,
      },
      {
        path: "Home",
        component: Home,
        name: "Home",
        component: Home,
        meta: {
          // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: "Teacher",
        component: Teacher,
        name: "Teacher",
        meta: {
          // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: "Personal",
        component: Personal,
        name: "Personal",
        meta: {
          // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: "LayoutDemo",
        component: LayoutDemo,
        name: "LayoutDemo",
        meta: {
          // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: "Student/:studentName/and/:studentId",
        component: Student,
        name: "Student",
        meta: {
          // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: "User/:UserId",
        component: User,
        name: "User",
        meta: {
          // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
      },
    ],
  },
  { path: "/:pathMatch(.*)*", component: PageNotFoundComponent },
];

//创建路由对象
let router = createRouter({
  history: createWebHashHistory(), //指定路由模式
  routes,
});

/**
 * beforeEach:前置钩子
 * to:即将要进入的目标;
 * from:当前导航正要离开的路由;
 * next():跳转路由并对应name值;
 */
//根据我们的项目需求
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (localStorage.getItem("access_token")) {
      // 从本地存储localStorage获取当前的token是否存在
      next();
    } else {
      //如果token不存在，就跳到首页
      next("/Home");
    }
  } else {
    if (localStorage.getItem("access_token") && to.path == "/login") {
      //token存在时候，进去登录页面就自动跳转到首页
      next("/Home");
    } else {
      next();
    }
  }
});

/**
 * beforeResolve:全局解析守卫
 * beforeResolve:获取数据或执行任何其他操作(如果用户无法进入页面时,你希望避免执行的操作)的理想位置
 */
router.beforeResolve(async (to) => {
  if (to.meta.requiresCamera) {
    try {
      await askForCameraPermission();
    } catch (error) {
      if (error instanceof NotAllowedError) {
        // ... 处理错误，然后取消导航
        return false;
      } else {
        // 意料之外的错误，取消导航并把错误传给全局处理器
        throw error;
      }
    }
  }
});

/**
 * afterEach:全局后置钩子
 *
 */
//  router.afterEach((to, from) => {
//   sendToAnalytics(to.fullPath)
// })

/**
 * 完整的导航解析流程:
 * 1. 导航被触发;
 * 2. 在失活的组件里调用beforeRouteLeave守卫;
 * 3. 调用全局的beforeEach守卫;
 * 4. 在重用的组件里调用beforeRouteUpdate守卫;
 * 5. 在路由配置里调用beforeEnter;
 * 6. 解析异步路由组件;
 * 7. 在被激活的组件里调用beforeRouteEnter;
 * 8. 调用全局beforeResolve守卫;
 * 9. 导航被确认;
 * 10. 调用全局的afterEach钩子;
 * 11. 触发DOM更新;
 * 12. 调用beforeRouteEnter守卫中传给next的回调函数,创建好的组件实例会作为回调函数的参数传入.
 */

/**
 * 数据获取
 * 有时候,进入某个路由后,需要从服务器获取数据,例如,在渲染用户信息时,你需要从服务器获取用户的数据,我们可以通过两种方式来实现:
 * 1. 导航完成之后获取:先完成导航,然后在接下来的组件生命周期钩子中获取数据,在数据获取期间显示'加载中'之类的提示;
 * 2. 导航完成之前获取:导航完成后,在路由进入的守卫中获取数据,在数据成功后执行导航;
 * 从技术的角度来说,两种方式都不错--就看你想要的用户体验是哪种.
 */

/**
 * vue3的@vue/reactivity包是框架响应式的底层实现,其内部使用了观察者模式,我们知道观察者模式是用来定义一对多的依赖关系,一个对象状态发生变化时,所有依赖于它的对象都能得到通知,
 * vue框架实现的效果是,修改了响应式状态对象,所有依赖该状态对象的组件渲染函数重新执行并更新DOM,
 * dep和reactveEffect
 * 观察者模式主要的参与者主题(Subject)和观察者(Observer),对应到vue系统中就是Dep和ReactiveEffect,Dep是一个Set类的别名,ReactiveEffect类是观察者,其内部属性deps类型是Dep的数组,
 * 用来保存所有依赖,
 */

export default router;
