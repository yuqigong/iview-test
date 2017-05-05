import path from 'path'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import HtmlwebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import OpenBrowserPlugin from 'open-browser-webpack-plugin'

const port = process.env.PORT || 8080;

const proxyConf = [{
    path: "/**",
    target: "http://example.com",
    host: "example.com",
    changeOrigin: true
}];

const wpconfig = {
    entry: [
        './src/main/index.js'
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                'css': 'vue-style-loader!css-loader',
                'scss': 'vue-style-loader!css-loader!sass-loader',
                'sass': 'vue-style-loader!css-loader!sass-loader',
                'less': 'vue-style-loader!css-loader!less-loader'
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /iview.src.*?js$/,
            use: {
                loader: 'babel-loader'
            },
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader?minimize', 'autoprefixer-loader'],
                fallback: 'style-loader'
            })
        }, {
            test: /\.less/,
            use: ExtractTextPlugin.extract({
                use: ['autoprefixer-loader', 'less-loader'],
                fallback: 'style-loader'
            })
        }, {
            test: /\.(scss|sass)$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=1024'
        }, {
            test: /\.(jpe?g|png|gif)$/i,
            exclude: /node_modules/,
            use: {
                loader: 'url-loader?limit=10000&name=[hash:8].[name].[ext]'
            }
        }]
    },
    performance: {
        hints: false
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new HtmlwebpackPlugin({
            template: './src/main/template.html',
            filename: 'index.html',
            inject: true
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:' + port })
    ]
};

wpconfig.entry.unshift('webpack-dev-server/client?http://0.0.0.0:' + port, "webpack/hot/dev-server");

new WebpackDevServer(webpack(wpconfig), {
    publicPath: wpconfig.output.publicPath,
    historyApiFallback: true,
    noInfo: false,
    hot: true,
    inline: true,
    // contentBase: './',
    port: port,
    stats: {
        colors: true
    },
    proxy: proxyConf
}).listen(port, '0.0.0.0', (error) => {
    if (error) {
        console.log(error);
    }
    console.log('Listening at PORT:' + port);
});
