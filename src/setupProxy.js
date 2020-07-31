const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    const proxyInfos = {
        '/api': {
            target: 'http://tongzhong.xyz/', //这里放置url
            changeOrigin: true,
            pathRewrite: function (path, req) { return path.replace('/api', '/secondhand_api') },
        },
        '/cityapi': {
            target: 'http://pv.sohu.com/',
            changeOrigin: true,
            pathRewrite: function (path, req) { return path.replace('/cityapi', '') },
        },
        '/newsapi': {
            target: 'https://v1.alapi.cn/',
            changeOrigin: true,
            pathRewrite: function (path, req) { return path.replace('/newsapi', '/api') },
        },
        '/avatorapi': {
            target: 'http://api.rosysun.cn/',
            changeOrigin: true,
            pathRewrite: function (path, req) { return path.replace('/avatorapi', '') },
        },
    };
    Object.entries(proxyInfos).forEach(([key, proxyInfo]) => {
        app.use(createProxyMiddleware(key, proxyInfo));
    });
};
