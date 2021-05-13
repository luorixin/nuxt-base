<template>
  <div class="mytools">
    <nuxt-link to="/">帮助</nuxt-link>
    <nuxt-link to="/">定价</nuxt-link>
    <nuxt-link to="/">登陆</nuxt-link>
    <freetry :plain="true"></freetry>
  </div>
</template>

<script>
import freetry from './freetry.vue'
export default {
  components: { freetry }
}
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
