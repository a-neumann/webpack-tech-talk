module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};