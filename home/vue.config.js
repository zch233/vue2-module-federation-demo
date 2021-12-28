// name: 'xxx', // 当前应用的别名。
//     filename: 'xxx', // 入口文件名， remote 应用供 host 应用消费时，remote 应用提供的远程文件的文件名。
//     library: {
//         type: 'xxx',
//         name: 'xxx'
//     },
//     remotes: {
//         app2: 'app2@xxxx',
//         app3: 'app3@xxxx',
//         ...
//     },
//     exposes: {
//         './Button': './src/Button',
//         ...
//     },
//     shared: {
//         'react': {
//             import: 'xxx',
//             singleton: true,
//             requiredVersion: 'xxx',
//             strictVersion: 'xxx',
//             shareScope: 'xxx',
//             packageName: 'xxx',
//             sharedKey: 'xxx',
//             eager: true
//         }
//     },
//     shareScope: 'xxx'
module.exports = {
  publicPath: 'http://localhost:8084/',
  chainWebpack: (config) => {
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: "home",
        filename: "remoteEntry.js",
        exposes: {
          './HelloWorld': './src/components/HelloWorld.vue'
        },
        shared: {
          vuex: {
            eager: true,
            singleton: true,
          },
        },
    }])
  },

  devServer: {
    port: 8084,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    }
  }
}