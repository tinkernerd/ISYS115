const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/assets/js/main.js',
    plugins: [new ESLintPlugin()],
    
    output: {
        path: __dirname + '/dist/assets/js',
        filename: 'bundle.js'
    },
    
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js'], // Add this to resolve .js files automatically
    }
};
