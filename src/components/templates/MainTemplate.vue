<template>
  <div class="main-template-wrapper">
    <div class="layout-row layout-row-content">
      <header-component></header-component>
      <!--<slot name="header"></slot>-->
        <v-container class="login-form">
          <v-layout>
            <v-flex sx12>
              <slot/>
            </v-flex>
          </v-layout>
        </v-container>
    </div>
    <v-footer class="layout-row"><slot name="footer"></slot></v-footer>
  </div>
</template>

<script>
import HeaderComponent from '../organisms/HeaderComponent';

export default {
  components: {
    HeaderComponent,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
  @import "../../assets/styles/global-styles.less";
  .main-template-wrapper {
    font-family: 'Open Sans', Arial, sans-serif;
    margin: 0;
    display: table;
    background: url("/static/images/bg-main.png") repeat-x;
    width: 100%;
    height: 100%;
  }

  .layout-row {
    display: table-row;
    height: 1px;
    overflow: hidden;
    &.layout-row-content {
      height: 100%;
      overflow: visible;
    }
  }
  .login-form {
    background: transparent;
  }

</style>
