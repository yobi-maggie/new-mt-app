<template>
  <nav class="header-bar-nav">

    <ul class="header-nav-first clearfix">
      <template v-for="(nav, index) in navList" >
        <li :key="index" :class="nav.second || nav.third ? 'has-child': ''">
          <a v-if="!!nav.href" :href="nav.href" target="__blank">{{nav.title}}</a>
          <span v-else>{{nav.title}}</span>
          <ul v-if="nav.second" :class="[
          'header-nav-second', 'header-nav-' + nav.class]">
              <li v-for="(item ,index) in nav.second" :key="index">
              <a :href="item.href" target="__blank">{{item.title}}</a></li>
          </ul>
          <div v-else-if="nav.third" :class="[
          'header-nav-second', 'header-nav-' + nav.class]">
            <dl v-for="third in nav.third"
                :key="third.class"
                :class="['header-' + third.class,'header-nav-third']">
              <dt>{{third.title}}</dt>
              <dd v-for="item in third.items" :key="item.title">
                <a :href="item.href">
                  <img v-if="item.imgSrc"
                      :src="item.imgSrc"
                      :alt="item.alt"
                      :title="item.alt" class="appicon">
                  <template v-else> {{item.title}}</template>
                </a>
              </dd>
            </dl>
          </div>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import api from '@/api/header/nav';

export default {
  data() {
    return {
      navList: [],
    };
  },
  created() {
    api.getNavList().then((res) => {
      this.navList = res;
    });
  },
};
</script>
