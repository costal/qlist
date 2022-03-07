const rootWebpack = require('../webpack.root.config.js');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const filepath = require('path');
const pkg = require('./package.json');

const publicUrl = '/public';

const config = rootWebpack;
config.target = 'node';
config.mode = 'production';
config.entry = './src/ssr/server/index.jsx';
config.output = {
    path: filepath.resolve(__dirname, "build/server-dist"),
    filename: 'static/bundle.min.[contenthash].js',
    publicPath: '/',
    clean: true,
    library: {
        name: 'index',
        type: 'umd'
    }
};

config.plugins.push(new ModuleFederationPlugin({
    name: pkg.name,
    library: { type: "var", name: pkg.name },
    remotes: {},
    shared: {
        ...pkg.dependencies,
        "react": { singleton: true, eager: true, requiredVersion: '>=17.0.2' },
        "react-dom": { singleton: true, eager: true },
        "react-router-dom": { singleton: true, eager: true, requiredVersion: '>=6.2.1' },
        "react-icons": { singleton: true, eager: true, requiredVersion: "^4.3.1" }
    }
}));

config.plugins.push(new MiniCssExtractPlugin({
    filename: 'static/[name].css',
    chunkFilename: 'static/[id].css',
    ignoreOrder: true
}));

module.exports = config;
