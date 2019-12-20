<template>
  <div class="footer">
    <div class="links">
      <a href="https://pro.loacg.com/" title="Ant Design Pro Vue" target="_blank">Ant Design Vue Pro</a>
      <a href="https://github.com/vueComponent/ant-design-vue-pro" title="github" target="_blank">
        <a-icon type="github"/>
      </a>
      <a href="https://vue.ant.design" title="Ant Design Vue" target="_blank">Ant Design Vue</a>
    </div>
    <div class="copyright">
      Copyright &copy; 2019 重庆理工大学iCode创新实验室出品
    </div>
  </div>
</template>

<style lang="less" scoped>
  .footer {
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;

    .links {
      margin-bottom: 8px;
      font-size: 14px;

      a {
        color: rgba(0, 0, 0, 0.45);
        transition: all 0.3s;

        &:not(:last-child) {
          margin-right: 40px;
        }
      }
    }

    .copyright {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    }
  }
</style>
