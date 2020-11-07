const {
  withModuleFederation,
  MergeRuntime,
} = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = {
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      name: "dogdetail",
      library: { type: config.output.libraryTarget, name: "dogdetail" },
      filename: "static/runtime/remoteEntry.js",
      remotes: {
        // For SSR, resolve to disk path (or you can use code streaming if you have access)
        home: isServer
          ? path.resolve(
              __dirname,
              "../home/.next/server/static/runtime/remoteEntry.js"
            )
          : "home", // for client, treat it as a global
      },
      exposes: {
        "./DogPicture": "./components/DogPicture",
      },
      shared: [],
    };

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = "http://localhost:3001/_next/";
    }

    return config;
  },
};
