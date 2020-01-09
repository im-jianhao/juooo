const path = require("path");

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("views", path.resolve(__dirname, "./src/views"))
      .set("components", path.resolve(__dirname, "./src/components"))
      .set("assets", path.resolve(__dirname, "./src/assets"));
  },
  devServer: {
    proxy: {
      "/ajax": {
        target: "https://api.juooo.com",
        changeOrigin: true
      },
      "/home": {
        target: "https://api.juooo.com",
        changeOrigin: true
      },
      "/vip":{
        target: "https://api.juooo.com",
        changeOrigin: true
      },
      "/Show":{
        target: "https://api.juooo.com",
        changeOrigin: true
      }
    }
  }
};
