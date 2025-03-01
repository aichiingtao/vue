<!-- 加上setup，允许在script直接边写组合式API -->
<script setup>

//   引用子组件
import son from '@/components/icons/son.vue'


// 可以直接声明一个数据
const str = '你好'


// 默认数据并不是响应式的，使用 ref 可以直接使数据返回响应
// ref ，接收简单类型 合 复杂类型，反水一个响应式对象，    reacitve 只能接受对象类型，不建议使用
//  ref无论传的是什么类型的数据，都会自动转成对象类型
import {onMounted, ref} from 'vue'

const count = ref(0)
const setCount = () => {
  //  在脚本中访问数据，需要通过.value
  count.value++
}


//  导入计算属性，在vue2中计算属性是直接使用， vue3是导入在函数中回调使用，原理跟vue2是一样的，写法不同而已
import {computed} from "vue";

const list = ref([1, 2, 3, 4, 5, 6, 7, 8])

const computedList = computed(() => {
  return list.value.filter(item => item > 5)
})


// 生命周期，可以调用多次
// onMounted(() => {
//
// })


// 父组件的数据
const Spirit = ref('张三')

const Forest = () => {
  Spirit.value = Forest
}

</script>


<template>

  <div>
    {{ str }}
    <!--  在ref中，渲染数据库不需要 .value  -->
    {{ count }}
    <button @click="setCount"></button>
    <div>
      原始数据：{{ list }}
      <br>
      计算后数据： {{ computedList }}
    </div>
  </div>
  <br>
  <!-- 冒号是父传子，动态传递数据，  把父组件的数据传给子组件接收 -->
  <!--   @号是，接受子动态传递过来的数据，   -->
  <son
    :Spirit = "Spirit"
    @Dream = "Forest"
  ></son>

</template>


<style scoped>


</style>
