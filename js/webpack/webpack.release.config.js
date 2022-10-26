const path = require('path')
const os = require('os')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin = require('terser-webpack-plugin')

const threads = os.cpus().length

function getStyleLoader(prm) {
    return [
        // compiles Less to CSS
        // 'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        prm,
    ].filter(Boolean)
}

module.exports = {
    //1. 输出
    entry: "./index.js",
    //2. 输出
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/main.js",
        clean: true // 每次自动清除打包的资源
    },
    //3. 加载器
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.css$/i,
                        use: getStyleLoader(),
                    },
                    {
                        test: /\.less$/i,
                        use: getStyleLoader('less-loader')
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        use: getStyleLoader('sass-loader')
                    },
                    {
                        test: /\.(png|jpe?g|gif|webp|svg)$/i,
                        type: "asset",
                        parser: {
                            dataUrlCondition: {
                                //小于10kb的图片转base64
                                //优点：减少请求的次数 缺点: 项目体积变大
                                maxSize: 10 * 1024
                            }
                        },
                        generator: {
                            //输出图片名称
                            filename: "imgages/[hash:8][ext][query]"
                        }
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'thread-loader', //开启多进程
                                options: {
                                    works: threads //进程数量
                                }
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    cacheDirectory: true, //开启babel缓存
                                    cacheCompression: false //关闭缓存文件压缩
                                }
                            }
                        ]
                    }
                ]
            }

        ]
    },
    //4. 插件
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, 'src'),
            cache: true, //开启缓存
            cacheLocation: path.resolve(__dirname, "node_modules/.cache/eslint-cache"),
            threads //开启多进程、进程数量

        }),
        new HtmlWebpackPlugin({
            // 模板 以public/index.html为模板创建心的文件
            // 新的html特点 1.文件解构和原来一致 2.自动打包输出的资源
            // 
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new CssMinimizerPlugin(),
        new TerserWebpackPlugin({
            parallel: threads //开启多进程、进程数量
        })

    ],
    //5. 模式
    mode: "production",
    devtool: "source-map"
}