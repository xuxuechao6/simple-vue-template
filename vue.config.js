// const BASE_URL = process.env.NODE_ENV === 'production' ?
//     '/pushMsg/' :
//     '/'
module.exports = {
    // publicPath: BASE_URL,
    devServer: {
        // open: process.platform === 'darwin',
        // host: 'localhost',
        port: 8989,
        // open: true, //配置自动启动浏览器
        proxy: {
            '/apis': {
                target: 'http://127.0.0.1:8988/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/apis': '/apis'
                }
            }
        }
    },

}