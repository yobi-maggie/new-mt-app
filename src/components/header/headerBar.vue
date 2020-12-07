<template>
  <div class="header-bar">
     <div class="header-content">
        <header-bar-position></header-bar-position>
        <header-bar-nav></header-bar-nav>
     </div>
  </div>
</template>
<script>
import headerBarPosition from './headerBarPosition.vue';
import headerBarNav from './headerBarNav.vue';

export default {
  components: {
    headerBarPosition,
    headerBarNav,
  },
};
</script>
<style lang="less">
  @import url('~@/assets/css/nav.less');
</style>
