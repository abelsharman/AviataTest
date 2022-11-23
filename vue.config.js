const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');

module.exports = {
    outputDir: "distAviata",
    chainWebpack(config) {
        config.plugins.delete('prefetch');
        config.plugin('CompressionPlugin').use(CompressionPlugin);
    },
    pluginOptions: {
        compression: {
        brotli: {
            filename: '[file].br[query]',
            algorithm: 'brotliCompress',
            include: /\.(js|css|html|svg|json)(\?.*)?$/i,
            compressionOptions: {
            params: {
                [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
            },
            },
            minRatio: 0.8,
        },
        gzip: {
            filename: '[file].gz[query]',
            algorithm: 'gzip',
            include: /\.(js|css|html|svg|json)(\?.*)?$/i,
            minRatio: 0.8,
        },
        },
    },
};