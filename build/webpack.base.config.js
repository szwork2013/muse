var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var plugins = [
    //提公用js到common.js文件中
    //new webpack.optimize.CommonsChunkPlugin('common.js'),

    new ExtractTextPlugin("style.css"),

    // 使用 ProvidePlugin 加载使用率高的依赖库
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
];

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },{
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader?limit=8192'
            },{
                test: /\.js$/,
                exclude: /node_modules|vue\/dist/,
                loader: 'babel'
            },{
                test: require.resolve('jquery'), 
                loader: 'expose?jQuery'
            }, { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },{
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=8192",
                query: {
                    name: '[name].[ext]?[hash]&mimetype=application/font-woff'
                }
            },{
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=8192",
                query: {
                    name: '[name].[ext]?[hash]&mimetype=application/font-woff2'
                }
            },{
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=8192",
                query: {
                    name: '[name].[ext]?mimetype=application/font-woff2'
                }
            },{
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=8192",
                query: {
                    name: '[name].[ext]?mimetype=application/font-woff2'
                }
            },{
                test: /\.json(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url",
                query: {
                    name: '[name].[ext]?mimetype=application/json'
                }
            }
                  
        ]
    },

    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    plugins: plugins
}