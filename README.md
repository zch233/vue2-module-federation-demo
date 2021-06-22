# module federation demo in vue-cli
##  description
@vue/cli@next

### vue.config.js

```
chainWebpack: (config) => {
  /* module federation plugin import */
  config
    .plugin('module-federation-plugin')
    .use(require('webpack').container.ModuleFederationPlugin, [{
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        layout: "layout@http://localhost:8082/remoteEntry.js",
      },
      exposes: {
        './HelloWorld': './src/components/HelloWorld.vue'
      },
      shared: {
        "vue": {
          eager: true,
          singleton: true,
          requiredVersion: deps.vue,
        }
      }
  }])
},
```

