export default devServer = {
    proxy: {
      "/api": {
        changeOrigin: true,
        target: "http://viacep.com.br/ws"
      }
    }
  }