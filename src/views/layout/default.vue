<template>

<el-container>
  <el-header>
    <header-content></header-content>
  </el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>

</template>

<script>

import HeaderContent from '@/components/header.vue';

export default {
  components: {

    HeaderContent,
  },
};
</script>
