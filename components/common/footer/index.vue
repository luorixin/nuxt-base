<template>
  <div class="m-footer">
    <el-image fit="fill" class="footer-img" :src="codeImg" />
    <div class="footer-con">
      Parllay企微管家是爱点击旗下的专业企微运营管理工具。通过自动打标签、自动加好友、裂变、拼团等多种营销自动化工具，助您打通微信用户数据，构建营销自动化与和用户增长体系。
    </div>
  </div>
</template>

<script>
export default {
  name: 'myFooter',
  data: () => {
    return {
      codeImg: './img/parllay营销自动化二维码.jpg'
    }
  }
}
</script>

<style scoped lang="scss">
.m-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  .footer-img {
    width: 1.557333rem /* 146/93.75 */;
    height: 1.557333rem /* 146/93.75 */;
    margin-right: 0.853333rem /* 80/93.75 */;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .footer-con {
    font-family: PingFangSC-Regular;
    font-size: 0.170667rem /* 16/93.75 */;
    color: #ffffff;
    letter-spacing: -0.34px;
    text-align: center;
    line-height: 0.266667rem /* 25/93.75 */;
    width: 7.786667rem /* 730/93.75 */;
  }
}
</style>
