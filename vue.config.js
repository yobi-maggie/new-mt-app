module.exports = {
  devServer: {
    proxy: {
      '/suggest': {
        target: 'https://www.meituan.com/ptapi',
        ws: true,
        changeOrigin: true,
      },
    },
  },

};
