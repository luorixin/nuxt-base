<template>
  <section class="home-main">
    <section class="home-bg"></section>
    <section class="home-screen">
      <div class="home-screen__head"></div>
    </section>
    <section class="home-thanks"></section>
  </section>
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
.home-main {
  position: relative;
  .home-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 518px;
    background: linear-gradient(
      70deg,
      rgba(245, 244, 254, 0.9),
      #f9fcff 44%,
      #eef5ff
    );
  }
  .home-screen {
    position: relative;
  }
}
</style>
