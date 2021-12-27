//const target = 'http://127.0.0.1:3000'

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  devServer: {
    port: 8080,
    proxy: {
      '/oauth2.0': {
        target: 'https://nid.naver.com'
      }
      // * Docker 환경에서 사용하기 때문에 axios에서 직접 CORS 설정
      // '^/api': {
      //   target,
      //   changeOrigin: true
      // },
      // '^/upload': {
      //   target,
      //   changeOrigin: true
      // },
      // '^/download': {
      //   target,
      //   changeOrigin: true
      // }
    }
  }
}