<template>
    <div class="header-content clearfix">
        <header-title-module></header-title-module>
        <header-search-module></header-search-module>
    </div>
</template>
<script>
import headerTitleModule from './headerTitleModule.vue';
import headerSearchModule from './headerSearchModule.vue';

export default {
  components: {
    headerTitleModule,
    headerSearchModule,
  },
};
</script>
<style lang="less">
    @import url('~@/assets/css/header-content.less');
</style>
