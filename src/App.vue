<template>
  <div class="container1">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
/**
 * Vue3在性能优化方面进行了许多改进和优化,包括一下方面:
 * 1. 更快的渲染:vue3使用了新的响应式系统,将Proxy作为其核心,以取代vue2.0x中使用的
 * Object.defineProperty,这样可以更快地追踪变化并更新视图.
 * 2. 更小的包体积:vue3改进了其打包工具,可以生成更小,更高效的代码,同时,移除了一些
 * 不常用的API,减少了库的大小.
 * 3. 更好的Tree-Shaking支持:vue3通过使用ES模块来实现更好的Tree-Shaking支持,
 * 从而减少了最终打包文件的大小.
 * 4. 静态提升:vue3采用了基于编译时的静态提示技术,将组件编译为渲染函数,并通过
 * hoist静态节点,以减少不必要的重复渲染和创建.
 * 5. 更好的TypeScript支持:vue3使用Typescript重新编写了核心代码,提供了更好的
 * 类型支持和开发.
 * 6. 更好的代码结构和组织:vue3重构了其内部代码结构,以更好地组织和管理代码.
 */
</script>

<style>
.container1 {
  width: 100%;
  height: 100vh;
  user-select: none;
  display: flex;
}
body {
  margin: 0;
}
</style>
