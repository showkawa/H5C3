const path = require('path')

module.exports = {
    //1. 输出
    entry: "./index.js",
    //2. 输出
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "main.js"
    },
    //3. 加载器
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    },
    //4. 插件
    plugins:[

    ],
    //5. 模式
    mode:"development"
}