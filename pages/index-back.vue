<template>
  <section class="home-main">
    <section class="home-bg"></section>
    <section class="home-screen">
      <div class="home-screen__head">
        <div class="head-text">
          <div class="text-title">企业微信私域流量运营神器</div>
          <div class="text-desc">
            全面升级企业微信，多渠道引流获客，精细化客户管理，高效社群运营，让管理和营销更简单！
          </div>
          <div class="text-opt">
            <freetry type="plain">立即免费使用</freetry>
          </div>
        </div>
        <div class="head-carousel">
          <el-carousel :interval="5000" arrow="always" height="438px">
            <el-carousel-item
              v-for="(item, index) in headImgs"
              :key="'head_img_' + index"
            >
              <el-image :src="item.src"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </section>
    <section class="home-thanks"></section>
  </section>
</template>
<script>
import freetry from '../components/common/header/freetry.vue'
export default {
  components: { freetry },
  data() {
    return {
      headImgs: [
        {
          src: 'https://assets.weibanzhushou.com/web/we-work-webapp/website-landing-page_right-1-4.ad681e3fc1f0.png'
        },
        {
          src: 'https://assets.weibanzhushou.com/web/we-work-webapp/website-landing-page_right-1-3.648979a32b8d.png'
        },
        {
          src: 'https://assets.weibanzhushou.com/web/we-work-webapp/website-landing-page_right-1-4.ad681e3fc1f0.png'
        },
        {
          src: 'https://assets.weibanzhushou.com/web/we-work-webapp/website-landing-page_right-1-1.150bc5376cbb.png'
        }
      ]
    }
  },
  methods: {
    handleClose() {
      console.log('close')
    }
  }
}
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
    .home-screen__head {
      position: relative;
      height: 518px;
      .head-text {
        position: absolute;
        left: 100px;
        top: 150px;
        z-index: 100;
        .text-title {
          height: 59px;
          font-size: 42px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.85);
          line-height: 59px;
        }
        .text-desc {
          width: 492px;
          margin: 32px 0;
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
          line-height: 30px;
        }
      }
      .head-carousel {
        position: absolute;
        top: 60px;
        right: 20px;
        width: 634px;
        height: 438px;
      }
    }
  }
}
</style>
