<template>

<el-container>
  <el-header>
      <nav-bar></nav-bar>
      <header-content></header-content>
  </el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>

</template>

<script>
import navBar from '@/components/nav.vue';
import HeaderContent from '@/components/header.vue';

export default {
  components: {
    navBar,
    HeaderContent,
  },
};
</script>
