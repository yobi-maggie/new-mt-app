<template>
  <div class="nav-bar">
     <div class="header-content">
        <div class="header-bar-position">
          <nav-position />
        </div>
     </div>
  </div>
</template>
<script>
import NavPosition from './nav-position.vue';

export default {
  components: {
    NavPosition,
  },
};
</script>
<style lang="less">
  @import url('~@/assets/css/nav.less');
</style>
