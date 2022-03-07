const rootWebpack = require('../webpack.root.config.js');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const filepath = require('path');
const pkg = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';
const publicUrl = '/public';

const config = rootWebpack;
config.mode = isProduction ? "production" : "development";
config.entry = './src/index.tsx';
config.output = {
    path: filepath.resolve(__dirname, 'bundle/dist'),
    filename: isProduction ?
        'static/bundle.min.[contenthash].js' :
        'static/bundle.min.[hash].js',
    publicPath: '/',
    clean: true
};

config.optimization = {
    ...config.optimization,
    minimizer: [new TerserPlugin()]
};

config.devServer = {
    static: {
        directory: filepath.join(__dirname, "bundle/dist"),
    },
    port: 'auto',
    hot: true,
    open: true,
    compress: true,
};

config.plugins.push(new ModuleFederationPlugin({
    name: pkg.name,
    library: { type: "var", name: pkg.name },
    remotes: {},
    shared: {
        ...pkg.dependencies,
        "react": { singleton: true, eager: true, requiredVersion: ">=17.0.2"},
        "react-dom": { singleton: true, eager: true },
        "react-router-dom": { singleton: true, eager: true, requiredVersion: '>=6.2.1' },
        "react-icons": { singleton: true, eager: true, requiredVersion: "^4.3.1" }
    }
}));

config.plugins.push(new HtmlWebpackPlugin({
    template: filepath.resolve(__dirname, './public/index.html'),
}));

config.plugins.push(new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
    PUBLIC_URL: publicUrl
}));

if (isProduction) {
    config.plugins.push(new MiniCssExtractPlugin({
        filename: 'static/[name].css',
        chunkFilename: 'static/[id].css',
        ignoreOrder: true
    }));
}
module.exports = config;
