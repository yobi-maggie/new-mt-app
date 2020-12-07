<template>
    <div class="header clearfix">
        <header-bar></header-bar>
        <header-content></header-content>
    </div>
</template>

<script>
import headerBar from './headerBar.vue';
import HeaderContent from './header-content.vue';

export default {
  components: {
    headerBar,
    HeaderContent,
  },
};
</script>
<style lang="less">
    @import url('~@/assets/css/header.less');
</style>
