<!-- 加上setup，允许在script直接边写组合式API -->
<script setup>

//   引用子组件
import son from '@/components/icons/son.vue'
import middle from '@/components/middle.vue'
import middle1 from '@/components/middle1.vue'


// 可以直接声明一个数据
const str = '你好'


// 默认数据并不是响应式的，使用 ref 可以直接使数据返回响应
// ref ，接收简单类型 合 复杂类型，反水一个响应式对象，    reacitve 只能接受对象类型，不建议使用
//  ref无论传的是什么类型的数据，都会自动转成对象类型
import {onMounted, provide, ref, watch} from 'vue'

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


// 父组件的数据   props 用法
const Spirit = ref('张三')

const Forest = (Puzzle) => {
  Spirit.value = Puzzle    //   Puzzle    是接受传过来的 值
}


//  即时回调的侦听器， 监听器
//  在数据没有变化的时候，先执行一次，数据变化又执行

const source = ref('')
watch(
  source, () => {

    console.log('执行了一次')
  },
  //  触发执行
  {immediate: true}
  //  只执行一次，数据在发生变化也不执行
  // { once: true }
)

//   双向绑定获取 dom
const inp = ref(null)

// dom 渲染完成后
onMounted(() => {
  //  dom渲染完成后立马聚焦input框
  inp.value.focus()
})

const Velocity = () => {
  inp.value.focus()
}

//   双向绑定获取 子组件的属性和方法
const Wisdom = ref(null)
const Yearning = () => {
  console.log(Wisdom.valueOf())
}



//  夸成层级传递普通数据
//   发送数据
provide('Melody',123)
const Harmony = ref(100)

//  夸成层级传递响应式普通数据
provide('Whisper',Harmony)
setTimeout(() => {
  Harmony.value = 500
},2000)


// provide写一个函数，给后代组件调用
provide('Freedom',(dream) => {
  Harmony.value = dream
})

//  父组件的数据与子组件的 input标签做双向绑定
const txt = ref('123456')


//  vuex中的 store   接收数据
//  导入 store ，导入之后再声明一个变量，就可以使用了
import { useCounterStore } from '@/Store/counter.js'
//  访问到的是一个对象，使用渲染要 Adventure.xxxx
const Adventure = useCounterStore()

// 解构仓库里面的数据,解构后直接引用
import { storeToRefs } from 'pinia'
const { Embrace } = Adventure
const { Legacy } = storeToRefs(Adventure)




</script>


<template>
  --------------------第一层组件--------------------------------------
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

    <br>

    <button @click="Yearning"> 获取子组件的属性和方法</button>
    <div>
      <!--    双向绑定获取 dom -->
      <input ref="inp" type="text">
      <button @click="Velocity">点击输入框聚焦</button>
    </div>

    <div>
      <input type="text" v-model="source">
    </div>


    ------------------------


<!--    渲染store 里面的数据 -->
    <div>
      <p>{{ Adventure.count }}    </p>
      <button @click="Adventure.Ocean">+</button>
      <button @click="Adventure.Ocean1">-</button>
    </div>

    <div>
      <button @click="Embrace">获取</button>
      <ul>
        <li v-for="(item,index) in Legacy" :key="item.id">
          <p>id:{{item.id}}</p>
          <p>{{item.alert_tips}}</p>
          <p>{{item.card_subtitle}}</p>
        </li>
      </ul>
    </div>



  </div>


  --------------------第二层组件--------------------------------------

  <middle></middle>
  ---------------------
  <middle1></middle1>


  --------------------第三层组件--------------------------------------

  <!-- 冒号是父传子，动态传递数据，  把父组件的数据传给子组件接收 -->
  <!--   @号是，接受子动态传递过来的数据，   -->
  <!--    双向绑定获取 子组件的属性和方法  -->
  <son
    v-model="txt"
    ref="Wisdom"
    :Spirit="Spirit"
    @dream="Forest"
  >
  </son>
  {{ txt }}


</template>


<style scoped>


</style>
