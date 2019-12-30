const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const project = require('./project.config');

const inProject = path.resolve.bind(path, project.basePath);
const inProjectSrc = file => inProject(project.srcDir, file);

const __DEV__ = project.env === 'development';
const __TEST__ = project.env === 'test';
const __PROD__ = project.env === 'production';

const config = {
  resolve: {
    modules: ['node_modules']
  },
  entry: {
    main: ['@babel/polyfill', inProjectSrc(project.main)]
  },
  output: {
    path: inProject(project.outDir),
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
    publicPath: project.publicPath
  },
  devtool: __DEV__ ? project.sourcemaps : false,
  mode: __DEV__ || __TEST__ ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx|svg)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { compact: false }
      }
    ]
  },
  // Globals & Plugins
  plugins: [
    new webpack.DefinePlugin(
      Object.assign(
        {
          'process.env': { NODE_ENV: JSON.stringify(project.env) },
          __DEV__,
          __TEST__,
          __PROD__
        },
        project.globals
      )
    )
  ]
};

// DevServer
// ------------------------------------
config.devServer = {
  port: 3001,
  compress: true, // enable gzip compression
  historyApiFallback: true, // true for index.html upon 404, object for multiple paths
  https: false,
  hot: true,
  open: true
};

// Enable HMR
// ------------------------------------
if (__DEV__) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new webpack.NamedModulesPlugin());
}

// HTML Template
// ------------------------------------
config.plugins.push(
  new HtmlWebpackPlugin({
    template: inProjectSrc('index.html'),
    inject: true,
    minify: { collapseWhitespace: false }
  })
);

// Images
// ------------------------------------
config.module.rules.push({
  test: /\.(png|jpg|gif|svg)$/,
  loader: 'url-loader',
  options: {
    limit: 8192
  }
});

// Fonts
// ------------------------------------
config.module.rules.push({
  test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      }
    }
  ]
});

// s[a|c]ss
// ------------------------------------
config.module.rules.push({
  test: /\.s[a|c]ss$/,
  loader: 'sass-loader!style-loader!css-loader'
});

// CSS
// ------------------------------------
config.module.rules.push({
  test: /\.css$/,
  use: ['style-loader', 'css-loader', 'resolve-url-loader'],
  include: [path.join(__dirname, 'src'), /node_modules/]
});

// Production Optimization
// ------------------------------------
if (__PROD__) {
  config.optimization = {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false
          }
        }
      })
    ],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  };
  // Copy Files from /static
  config.plugins.push(
    new CopyWebpackPlugin([{ from: 'src/static', to: 'static' }])
  );
}

module.exports = config;
