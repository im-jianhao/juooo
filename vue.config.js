const path = require("path");

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("views", path.resolve(__dirname, "./src/views"))
      .set("components", path.resolve(__dirname, "./src/components"))
      .set("assets", path.resolve(__dirname, "./src/assets"))
      .set("utils", path.resolve(__dirname, "./src/utils"));
  },
  devServer: {
    proxy: {
      "/city": {
        target: "https://api.juooo.com",
        changeOrigin: true
      },
      "/theatre/index": {
        target: "https://api.juooo.com",
        changeOrigin: true
      },
      "/Schedule": {
        target: "https://api.juooo.com",
        changeOrigin: true
      },
      "/Show": {
        target: "https://api.juooo.com",
        changeOrigin: true
      }
    }
  }
};
