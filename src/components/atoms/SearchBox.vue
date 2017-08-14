<template>
    <div class="search-box">
        <input class="sb-search-input" placeholder="where is?">
        <v-btn width="60px" icon class="ma-0 search-btn">
            <v-icon class="white--text">search</v-icon>
        </v-btn>
    </div>
</template>
<<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
@import '../../assets/styles/theme.less';
.search-box {
    position: relative;
}
.sb-search-input {
    border: 1px @border-white solid;
	outline: none;
	background: @background-white;
	height: 60px;
	padding: 20px 65px 20px 20px;
	font-size: 20px;
	color: @input-color;
    width: 100%;
}

.search-btn{
    width: 60px;
    height: 60px;
    background-color: @border-red;
    position: absolute;
    border-radius: 0px;
    color: white;
    top:0;
    right: 0;
}
</style>
