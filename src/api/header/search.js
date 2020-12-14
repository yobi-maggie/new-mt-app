import axios from '@/axios';

export default {
  searchSuggect: (words) => axios.get('/suggest', {
    params: {
      keyword: words,
    },
  }),
};
