<!-- 加上setup，允许在script直接边写组合式API -->
<script>
export default {
  setup(){
    const str = '你好'


    return{
      str
    }

  }
}

</script>



<template>

  <div>
    {{ str }}
  </div>
</template>




<style scoped>


</style>
