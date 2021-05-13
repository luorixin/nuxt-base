<template>
  <div class="mytools">
    <nuxt-link to="/">帮助</nuxt-link>
    <nuxt-link to="/">定价</nuxt-link>
    <nuxt-link to="/">登陆</nuxt-link>
    <el-button type="primary" plain>立即免费使用</el-button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.mytools {
  display: flex;
  align-items: center;
  a {
    display: inline-block;
    line-height: 24px;
    font-size: 16px;
    margin-right: 36px;
  }
}
</style>
