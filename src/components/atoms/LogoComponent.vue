<template>

</template>

<script>
  export default {
    data() {
      return {};
    },
  };

</script>

<style scoped lang="less">
  div {
    position: absolute;
    left: 60px;
    top: 20px;
    width: 104px;
    height: 74px;
    background: url("/static/images/logo.png");
    background-size: cover;

    @media
    only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min--moz-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5),
    (min-resolution: 144dpi) {
      background-image: url("/static/images/logo@2x.png");
    }

  }
</style>
