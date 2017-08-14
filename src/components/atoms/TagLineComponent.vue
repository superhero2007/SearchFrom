<template>
  <div class="wrapper">
    <div class="title-line">
      Uncommon Information from Extraordinary Places
    </div>
    <div class="subtitle-line">
      Cross-Search
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };

</script>

<style lang="stylus" scoped="scoped">
@import '../../assets/stylus/main'

.wrapper {
  position: absolute;
  left: 190px;
  top: 36px;

  .title-line {
    font-size: 14px;
    line-height: 14px;
    color: $theme.text;
  }

  .subtitle-line {
    color: #b01e21;
    text-transform: uppercase;
    font-size: 20px;
    padding: 3px 0;
  }
}
</style>
