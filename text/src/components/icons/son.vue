<script setup>
//  在setup中无法配置props，只能借助 编辑祁宏 接收数据
//  接收父组件传递过来的数据，
const props = defineProps({
  // 接收键名，和数据类型
  Spirit:String
})

//   子组件要修改父组件的数据，借助 emit 来提交
const emit = defineEmits(['Dream'])

const Revise = () => {
  //  子组件提交修改的数据 ，键，跟 要修改的值
  emit('Dream','李四')

}


//  在脚本中必须使用 props.xxxx 获取数据
console.log(props.Spirit)

</script>

<template>

  <div>
    我是子组件
    <p>
<!--    模板访问数据直接使用键名  -->
      {{ Spirit }}
      <button @click="Revise">修改</button>
    </p>
  </div>

</template>

<style scoped>

</style>
