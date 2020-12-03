<template>
    <div class="header">
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import navBar from './nav.vue';

export default {
  components: {
    navBar,
  },
};
</script>
<style lang="less">
    @import url('~@/assets/css/header.less');
</style>
