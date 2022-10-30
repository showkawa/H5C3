const path = require('path')
const os = require('os')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const threads = os.cpus().length

module.exports = {
    //1. 输出
    entry: "./index.js",
    //2. 输出
    output: {
        path: undefined, //开发模式不需要输出文件
    },
    //3. 加载器
    module: {
        rules: [
            {
                //每个文件只能被其中一个loader配置处理
                oneOf: [
                    {
                        test: /\.css$/i,
                        use: ["style-loader", "css-loader"],
                    },
                    {
                        test: /\.less$/i,
                        use: [
                            // compiles Less to CSS
                            'style-loader',
                            'css-loader',
                            'less-loader',
                        ],
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            // 将 JS 字符串生成为 style 节点
                            'style-loader',
                            // 将 CSS 转化成 CommonJS 模块
                            'css-loader',
                            // 将 Sass 编译成 CSS
                            'sass-loader',
                        ],
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
        new TerserWebpackPlugin({
            parallel: threads //开启多进程、进程数量
        })
    ],
    //5. 模式
    mode: "development",
    devtool: "source-map",
    //开发服务器 不会输出资源，因为他是在内存中打包
    devServer: {
        host: "localhost",//启动服务的域名
        port: "3000",//启动服务器端口
        open: true, // 是否自动打开浏览器
        hot: true //开启HMR (默认开启)

    }
}