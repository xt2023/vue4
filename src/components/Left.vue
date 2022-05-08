<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <MyCount :init="9"></MyCount>
  </div>
</template>

<script>
export default {}
</script>

//scoped会自动分配自定义属性
<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
  h3 {
    color: red;
  }
//d当使用第三方组件库的时候，如果需要修改第三方组件默认样式的需求 ，需要用到/deep/
  /deep/ h3 {
    color:pink;
  }
</style>
