var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./config/helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main'

    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
        {
            test: /\.ts/, loaders: ['ts-loader'], exclude: [/node_modules/]
        },
         {
             test: /\.html$/,
             loader: 'raw-loader'
         },
         {
             test: /\.scss$/,
             exclude: /node_modules/,
             loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
         }, 
      {
          test: /\.css$/,
          exclude: 'src',
          loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
    {
        test: /\.css$/,
        include: helpers.root('src'),
        loader: 'raw'
    }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
  new webpack.optimize.UglifyJsPlugin()
    ],
    devtool: 'cheap-module-eval-source-map',

    htmlLoader: {
        minimize: false // workaround for ng2
    },
    output: {
    path: './wwwroot/app/js/',
        //filename: '[name].js',
    filename: '[name].js',
    chunkFilename: '[id].[hash].chunk.js'
}
};