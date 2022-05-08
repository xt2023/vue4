<template>
  <div class="test-container">
    <p id="myp">Test组件----图书的数目是{{books.length}}</p>
    <p id="ppp">message的值是{{message}}</p>
    <button @click="message+='~'">点击变化</button>
  </div>
</template>

<script>
export default {

  props : ['info'],
  data (){
    return {
      message :'hello world',
      //定义一个空数组，方便讲请求到的数据填入空数组中
      books:[]
    }
  },
  methods:{
    show (){
      console.log('调用了')
    },
    //使用Ajax请求图书馆列表
    initBookList (){
      const xhr=new XMLHttpRequest()
      xhr.addEventListener('load', ()=>{
        const result=JSON.parse(xhr.responseText)
        console.log(result)
        this.books=result.data
      })
      xhr.open('GET','http://liulongbin.top:3006/api/getbooks')
      xhr.send()
    }
  },
  //创建阶段的函数
  beforeCreate() {
    // console.log(this.info)
  },

  created() {
    //created生命周期函数很常用，经常在他里面调用methods中的请求函数，再把拿到的数据转存到data中，供template模板渲染使用
    // console.log(this.info)
    // console.log(this.message)
    // this.show()
    this.initBookList()
  },
  mounted (){
    // const p=document.querySelector('p')
    // console.log(p)
  },
  //如果要操作当前组件的DOM，那么最早只能在mounted执行
  beforeUpdate() {
    // console.log('beforeUpdate')
    // const p=document.querySelector('#ppp')
    // console.log(p.innerHTML)
    // console.log(this.message)
  },
  //当数据变化后，为了能操作最新的DOM元素，必须把代码写到updated中
  updated() {
    console.log('beforeUpdate')
    const p=document.querySelector('#ppp')
    console.log(p.innerHTML)
    console.log(this.message)
  }

}


</script>

<style scoped>
  .test-container {
    background-color: pink;
    height: 200px;
  }
</style>