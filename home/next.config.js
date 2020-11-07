const {
  withModuleFederation,
  MergeRuntime,
} = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = {
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      name: "home",
      library: { type: config.output.libraryTarget, name: "home" },
      filename: "static/runtime/remoteEntry.js",
      remotes: {
        // For SSR, resolve to disk path (or you can use code streaming if you have access)
        dogdetail: isServer
          ? path.resolve(
              __dirname,
              "../dogdetail/.next/server/static/runtime/remoteEntry.js"
            )
          : "dogdetail", // for client, treat it as a global
      },
      exposes: {
        "./Nav": "./components/Nav",
      },
      shared: [],
    };

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = "http://localhost:3000/_next/";
    }

    return config;
  },
};
