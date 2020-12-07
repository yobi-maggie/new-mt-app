<template>

<el-container class="layout-blank">
  <el-header height="">
    <header-content></header-content>
  </el-header>
  <el-main>Main</el-main>
  <el-footer height="">Footer</el-footer>
</el-container>

</template>

<script>

import HeaderContent from '@/components/header/header.vue';

export default {
  components: {

    HeaderContent,
  },
};
</script>
