<template>
  <el-container ref="layout" class="layout-default">
    <el-header
      class="myheader"
      :class="{ hideHead: $store.state.hideHead, scrollCls: isScroll }"
    >
      <my-header />
    </el-header>
    <el-main class="mymain">
      <div class="main-content" :gutter="15">
        <transition name="fade-transform" mode="out-in">
          <nuxt />
        </transition>
      </div>
    </el-main>
    <el-footer class="myfooter">
      <my-footer />
    </el-footer>
    <el-backtop target=".layout-default" :visibility-height="132"></el-backtop>
  </el-container>
</template>

<script>
import MyHeader from '@/components/common/header/index.vue'
import MyFooter from '@/components/common/footer/index.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  },
  data() {
    return {
      isScroll: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      const scroll = document.querySelector('.layout-default')
      scroll.addEventListener('scroll', this.handleScroll)
    })
  },
  destroyed() {
    console.log('destroy')
    const scroll = document.querySelector('.layout-default')
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    $route: {
      handler(val) {
        if (process.client) {
          this.$store.commit('SET_HIDEHEAD', false)
          if (val.name === 'detailed-id') {
            this.$store.commit('SET_HIDEHEAD', true)
          } else {
            if (document.querySelector('.layout-default')) {
              document.querySelector('.layout-default').scrollTo(0, 0)
            }
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleScroll(e) {
      if (e.target.scrollTop > 132) {
        this.isScroll = true
      } else {
        this.isScroll = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/animation.scss';
.layout-default {
  height: 100vh;
  width: 100%;
  min-width: 1024px;
  overflow: scroll;
  * {
    box-sizing: border-box;
  }
}
/deep/ .el-icon-caret-top {
  font-size: 20px;
}
.myheader {
  background: transparent;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px !important;
  z-index: 300;
  // &.scrollCls {
  //   background: #fff;
  //   box-shadow: 0 2px 8px 0 rgba(21, 21, 21, 0.09);
  // }
}
.mymain {
  padding: 0;
  overflow: unset;
}
.myfooter {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  z-index: 300;
}
</style>
