<template>
  <div class="header-search-module">
    <div class="header-search-block">
      <input
        class="header-search-input"
        type="text"
        placeholder="搜索商家或地点"
        v-model="searchWords"
        @focus="searchSuggest(true)"
        @blur="searchSuggest(false)"
        @input="suggestHandle"
      /><button class="header-search-btn">
        <span class="header-icon icon-search-new"></span>
      </button>
    </div>
    <div class="header-search-suggest" v-show="showSuggest">
      <div v-if="!searchWords" class="header-search-noinput">
        <div v-if="searchHistory.length" class="header-search-history">
          <h6>最近搜索</h6>
          <span class="header-search-clean">删除搜索历史</span>
          <ul>

          </ul>
        </div>
      </div>
      <div v-else class="header-search-hasinput">
        <ul>
            <li v-for="(item, index) in suggestItems"
                :key="index"
                @click="changeSuggestWord(item.query)">
                <a :href="'#' + item.query">{{item.query}}</a>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/header/search';

export default {
  data() {
    return {
      searchWords: '',
      searchHistory: [],
      showSuggest: false,
      timer: null,
      suggestItems: [],
    };
  },
  methods: {
    searchSuggest(flag) {
      setTimeout(() => {
        this.showSuggest = flag;
      }, 500);
    },
    suggestHandle() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        api.searchSuggect(this.searchWords).then((res) => {
          console.log(res);
          this.suggestItems = res.data.suggestItems;
        });
      }, 500);
    },
    changeSuggestWord(query) {
      this.searchWords = query;
    },
  },
};
</script>
