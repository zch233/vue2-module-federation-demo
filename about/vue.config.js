module.exports = {
  transpileDependencies: true,
  publicPath: 'http://localhost:8088/',

  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
    
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: "about",
        filename: "remoteEntry.js",
        remotes: {
          home: 'home@http://localhost:8084/remoteEntry.js',
        },
        exposes: {
          './HelloWorld': './src/components/HelloWorld.vue'
        },
    }])
  },

  devServer: {
    port: 8088,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    }
  }
}
