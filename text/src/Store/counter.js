import {defineStore} from 'pinia'
import {ref} from 'vue'
import axios from 'axios'

//  定义 store,定义完成后返回一个函数，基于这个函数可以获取函数里面的数据
// 创建仓库数据，仓库是唯一标识
export const useCounterStore = defineStore('counter', () => {
  //  声明数据
  const count = ref(555)


  // 声明操作数据的方法  action
  const Ocean = () => count.value++
  const Ocean1 = () => count.value--

  //  异步数据操作
  const Legacy = ref([])
  const Embrace = async () => {
    const {data: {c}} = await axios.post('https://www.dedao.cn/pc/ddlive/v2/pc/home/live')
    Legacy.value = c.list
    console.log(c.list)
  }


  // 生命基于数据的计算属性  getters


  // 导出可以暴露的数据，外部才可以接收
  return {
    count,
    Ocean,
    Ocean1,
    Embrace,
    Legacy,
  }
},{
  //  开启当前模块的持久化
  persist: true,
})


