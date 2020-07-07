const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    const proxyInfos = {
        '/api': {
            target: 'http://tongzhong.xyz/', //这里放置url
            changeOrigin: true,
            pathRewrite: function (path, req) { return path.replace('/api', '/secondhand_api') },
        },
    };
    Object.entries(proxyInfos).forEach(([key, proxyInfo]) => {
        app.use(createProxyMiddleware(key, proxyInfo));
    });
};
