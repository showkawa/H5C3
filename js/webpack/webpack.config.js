const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
                loader: 'babel-loader',
            }
        ]
    },
    //4. 插件
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, 'src')
        }),
        new HtmlWebpackPlugin({
            // 模板 以public/index.html为模板创建心的文件
            // 新的html特点 1.文件解构和原来一致 2.自动打包输出的资源
            // 
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    //5. 模式
    mode: "development"
}