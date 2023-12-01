<template>
  <div class="box1">
    <h1 class="notPage">404</h1>
  </div>
</template>

<script>
export default {
  /**
   * $data:从data选项函数中返回的对象,会被组件赋为响应式,组件实例将会代理对其数据对象的属性访问.
   * $props:表示组件当前解析的props对象,详细信息:这里只包含通过props选项声明的props,组件实例将会代理对其props对象上属性的访问.
   * $el:该组件实例管理的DOM根节点.详细信息:$el知道组件挂载完成(mounted)之前都是undefined.
   * 对于单一根元素的组件,$el将会指向
   */
}
</script>

<style>
.box1 {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.notPage {
  font-size: 20vh;
}
</style>
