<template>
  <div class="container2">
    <h1>组合式API demo</h1>
    <h2 @click="aa++">{{ aa }}</h2>
  </div>
</template>

<script setup>
/**
 * <script setup>是在单文件组件(SFC)中使用组合式API的编译时的语法糖,当同时使用SFC与组合式API时刻语法是默认推荐,相对比普通的<script>语法,它具有更多优势:
 * 1. 更少的样式内容,更简洁的代码.
 * 2. 能够使用纯Typescript声明props和自定义事件.
 * 3. 更好的运行时性能(其模版会被编译成同一作用域内的渲染函数,避免了渲染上下文代理对象).
 * 4. 更好的IDE类型推导(减少了语言服务器从代码中抽取类型的工作)
 *
 * 要启用该语法,需要在<script>代码块上setup attribute.
 * 在里面的代码会被编译成组件setup()函数的内容,这意味着与普通的<script>只在组件被首次引入的时候执行一次不同,<script setup>中的代码会每次组件实例被创建的时候执行.
 */
import { ref, onMounted } from "vue";
onMounted(() => {
  console.log("onMounted");
});
const aa = ref(0);

const getData = () => {};

/**
setup()钩子在组件中使用组合式API的入口,通常只在一下情况下使用:
1. 需要在非单文件组件中使用组合式API时,
2. 需要在基于选项式API的组件中集成基于组合式API的代码时.
for in的特色
for...in循坏返回的值都是数据结构的键值名.
遍历对象返回的对象的key值,遍历数组则是返回数组的下标.
for...in循坏不只能够遍历数字键名,还会遍历原型上的值和手动添加的其余键.
在特别情况下,for...in循坏会任意的顺序遍历键名

computed计算属性
支持缓存,只有依赖数据发生改变,才会重新进行计算;如果函数所依赖的属性没有发生变化,从缓存中读取必须有返回值
使用方法和data中的数据一样,但是类似一个执行方法;
不支持异步,当computed内有异步操作时无效,无法监听数据的变化;
computed是计算属性,也就是依赖某个值或者props通过计算得来的数据;
computed的值是在getter
computed--计算属性
watch -- 监听属性
vue中可以使用监听器监听已有的属性变化(监听了未定义的属性也不会报错),并根据属性的变化做出响应.
vue中的watch监听属性的基本使用方式
watch监听属性下可以有多个监听对象,每一个监听对象中都有一个handler函数,该函数有两个参数,第一个参数为监听对象改变前的值,第二个参数为监听对象改变后的旧值
两个参数都不是必须的,需要用时用就好了
handler函数在监听对象
当我们观察上面现象就可以发现,利用vue的watch监听属性可以很好的处理异步任务,并且很简单的就能拿到新值和旧值,这两点也很好的解决了刚才使用vue的computed计算属性去完成业务
所出现的问题
注意:
上面使用定时函数setTimeout的时候,我们使用的是箭头函数,为什么这个时候使用箭头函数?
因为如果是普通函数,那么JS认定setTimeout函数是window调用的,

总结:
1. computed能的完成的功能,watch都可以完成;
2. watch能完成的功能,computed不一定能完成,例如:watch可以进行异步操作;
3. 被vue管理的函数,最好写成普通函数,这样this指向才是vm或组件实例对象;
4. 所以不被vue所管理的函数(定时器的回调函数,ajax的回调函数等),最好写成箭头函数,这样this指向才是vm或组件实例对象.
*/
</script>

<style>
.container2 {
  display: flex;
  flex-direction: column;
}
</style>
