<template>
  <div class="mytools">
    <el-button type="primary" @click="login()">登录</el-button>
  </div>
</template>

<script>
import Config from '@/config'
export default {
  methods: {
    login() {
      // this.freeTryVisible = true
      // this.registerVisible = false
      window.open(
        `${location.protocol}//${Config.redirectUrl}/login?redirect=apps/wecom/`,
        '_blank'
      )
    }
  }
}
</script>

<style scoped lang="scss">
.mytools {
  display: flex;
  align-items: center;
}
</style>
