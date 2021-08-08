const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        /*new CopyWebpackPlugin([
            {
              from: './src/img',
              to: 'img',
            },
        ]),*/
        /*new HtmlWebpackPlugin({
            title: 'Webpack 4 Starter',
            template: 'D:\JS\CPS_site\index.html',
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: false,
            }
          }),*/
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: ['/node_modules/']
            },
            {
                test: /\.css$/,
                use: 
                [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: { 
                            sourceMap: true,
                            postcssOptions: {
                                config: path.resolve(__dirname, 'src/js/postcss.config.js')
                            }
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader?name=./static/[name].[ext]'
                    },
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader: 'file-loader?name=./fonts/[name].[ext]'
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: { 
                            sourceMap: true,
                            postcssOptions: {
                                config: path.resolve(__dirname, 'src/js/postcss.config.js')
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true}
                    }
                ],
            },

        ]
    }
}