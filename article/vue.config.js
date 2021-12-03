module.exports = {
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
    
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: "article",
        remotes: {
          about: 'about@http://localhost:8088/remoteEntry.js',
        },
    }])
  },

  devServer: {
    port: 8086,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    }
  }
}
