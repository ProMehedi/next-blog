const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongoUrl:
          'mongodb+srv://mehedi:Mehedi2020@cluster0.wrrej.mongodb.net/nextBlogDev?authSource=admin&replicaSet=atlas-2kzvot-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
      },
    }
  }

  return {
    env: {
      mongoUrl:
        'mongodb+srv://mehedi:Mehedi2020@cluster0.wrrej.mongodb.net/nextBlog?authSource=admin&replicaSet=atlas-2kzvot-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      }
      return config
    },
    webpackDevMiddleware: (config) => {
      return config
    },
  }
}
