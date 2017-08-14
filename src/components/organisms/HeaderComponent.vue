<template>
  <div>
    <LogoComponent></LogoComponent>
    <TagLineComponent></TagLineComponent>
  </div>
</template>

<script>
  import LogoComponent from '../atoms/LogoComponent';
  import TagLineComponent from '../atoms/TagLineComponent';

  export default {
    components: {
      LogoComponent,
      TagLineComponent,
    },
    data() {
      return {};
    },
  };

</script>

<style scoped>
  div {
    display: block;
    position: relative;
    height: 120px;
  }
</style>
