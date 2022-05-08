<template>
<div>
  <h3>count组件</h3>
  <p>count的值是{{ count }}</p>
<!--  一行代码可以简写到行内-->
  <button @click="count++">+1</button>
  <button @click="dayin">打印this</button>
</div>
</template>

<script>
export default {
  //props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  //自定义属性的名字是封装者自定义的（合法即可）
  //props中的数据，可以直接在模板字符串中使用
  //注意：props是只读的，不要直接修改props的值，否则会报错
  // props:['init'],
  props :{
    //自定义属性A：{配置选项}
    init :{
      //如果使用count组件的时候，没有传递init属性，则默认值生效
      default:0,
      type: Number,
      //没有参数传过来就会报错
      required : true
    }
  },
  data (){
    return {
      count :this.init
    }
  },
  methods: {
    dayin (){
      console.log(this)
    }
  }

}
</script>

<style lang="less">

</style>