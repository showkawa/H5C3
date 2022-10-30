const path = require('path')
const os = require('os')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

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
    //1.1 多个入口文件
    // entry: {
    //     app: './index.js',
    //     main: './src/js/main.js'
    // },
    //2. 输出
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
        // 打包输出其他文件命名
        chunkFilename: "js/static/[name].chunk.js",
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
                                    cacheCompression: false, //关闭缓存文件压缩
                                    plugins: ['@babel/plugin-transform-runtime'], //减少代码的体积
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
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].chunk.css',
        }),
        // 压缩css
        new CssMinimizerPlugin(),
        // 压缩js
        new TerserWebpackPlugin({
            parallel: threads //开启多进程、进程数量
        }),
        // 压缩 image
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminGenerate,
                options: {
                    plugins: [
                        ["gifsicle", { interlaced: true }],
                        ["jpegtran", { progressive: true }],
                        ["optipng", { optimizationlevel: 5 }],
                        ["svgo",
                            {
                                plugins: [
                                    "preset-default",
                                    "prefixIds",
                                    {
                                        name: "sortAttrs",
                                        params: {
                                            xmlnsOrder: "alphabetical"
                                        }
                                    }
                                ]
                            }]
                    ]
                }
            }
        })

    ],
    //5. 模式
    mode: "production",
    devtool: "source-map",
    optimization: {
        // 代码分割配置
        splitChunks: {
            chunks: "all",// 对所有模块进行分割
            // 下面是默认配置
            // miniSize: 2000, // 代码分割的最小大小
            // minRemainingSize: 0, // 类似于miniSize最后确定提取的文件大小不能为0
            // minChunks: 1, //至少被引用的次数，满足条件才会代码分割
            // maxAsyncRequests: 30, //按需加载时并行加载文件的最大数
            // maxInitalRequests: 30, //入口js并行请求的最大数量
            // enforceSizeThreshold: 50000, //超过50kb一定会单独打包 (此时会忽略minRemainingSize，maxAsyncRequests，maxInitalRequests)
            // cacheGroups: { //group，哪些模块要打包到一个组
            //     defaultVendors: { //组名
            //         test: /[\\/]node_modules[\\/]/, //需要打包到一起的模块
            //         priority: -10, //权重 越大越高
            //         reuseExistingChunk: true // 如果当前chunk包含已从主bundle中拆分出的模块，则它将被重用而不是生成新的模块
            //     },
            //     default:{ // 其他不在名称组的会使用该默认规则
            //         minChunks: 2, // 这里的minChunks权重更大，会覆盖上面的值
            //         priority: -20,
            //         reuseExistingChunk: true
            //     }
            // }
        }
    }
}