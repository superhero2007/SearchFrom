<template>
  <v-app>
    <main-template>
      <section>
        <div style="background: transparent;">
          <router-view></router-view>
        </div>
      </section>
      <div slot="footer">© 2016 East View Information Services</div>
    </main-template>
  </v-app>
</template>

<script>
import MainTemplate from '../templates/MainTemplate';

export default {
  components: {
    MainTemplate,
  },
  data() {
    return {};
  },
};
</script>

<style lang="stylus">
  @import '../../assets/stylus/main'

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }
</style>
