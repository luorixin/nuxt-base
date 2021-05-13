<template>
  <div class="header-logo">
    <nuxt-link to="/">
      <img src="~/static/img/logo.png" alt="logo" />
    </nuxt-link>
    <label>{{ $t('logo') }}</label>
  </div>
</template>

<style lang="scss">
.header-logo {
  height: 100%;
  width: 200px;
  line-height: 60px;
  display: flex;
  a {
    display: inline-block;
    width: 60px;
    height: 60px;
    padding: 0;
    // border-right: 1px solid #dfdfdf;
    text-align: center;
    vertical-align: middle;
    img {
      display: inline-block;
      height: 60px;
      width: 60px;
    }
  }
  label {
    font-size: 14px;
    line-height: 60px;
    height: 60px;
  }
}
</style>
