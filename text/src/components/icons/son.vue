<script setup>
//  在setup中无法配置props，只能借助 编辑祁宏 接收数据
//  接收父组件传递过来的数据，
const props = defineProps({
  // 接收键名，和数据类型
  Spirit: String
})

//   子组件要修改父组件的数据，借助 emit 来提交
const emit = defineEmits(['Dream'])

const Revise = () => {
  //  子组件提交修改的数据 ，键，跟 要修改的值
  emit('Dream', '李四')

}


//  在脚本中必须使用 props.xxxx 获取数据
console.log(props.Spirit)

//   父组件要获取子组件的属性和方法，子组件要暴露方法键给父组件接收
const str = 999
defineExpose({
  str
})


//  导入接收夸层级数据的插件
import {inject} from 'vue'
// 夸层级接收数据
const Happiness = inject('Melody')
const Whisper = inject('Whisper')

//  接收定层级传递过来的函数方发生
const Freedom = inject('Freedom')
const Star = () => {
  //  执行操作只有，调用这个函数
  Freedom(1000)
}

//  导入 双向绑定
import {defineModel} from 'vue'

// 接收父组件的双向绑定
const Horizon = defineModel()

</script>

<template>

  <div>
    我是子组件
    <p>
      <!--    模板访问数据直接使用键名  -->
      {{ Spirit }}
      <button @click="Revise">修改</button>
    </p>

    <p> {{ Happiness }} </p>
    <p>{{ Whisper }}</p>
    <button @click="Star">提交</button>
  </div>
  <div>
    <input
      type="text"
      :value="Horizon"
      @input="e => Horizon = e.target.value">

  </div>


</template>

<style scoped>

</style>
