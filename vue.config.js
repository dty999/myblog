// const { defineConfig } = require('@vue/cli-service')
const goodsData = require('./mock/goods.json')
const headerMenuList = require('./mock/menuList').headerMenuList
module.exports = {
  transpileDependencies: true,
  devServer: {
    onBeforeSetupMiddleware(devServer) {
      devServer.app.get('/goods/list', (req, res) => {
        return res.json(goodsData.goodsList)
      })
      devServer.app.get('/goods/total', (req, res) => {
        return res.json(goodsData.goodsTotal)
      })
      devServer.app.get('/menuList/headerMenuList', (req, res) => {
        return res.json(headerMenuList)
      })
    }
  }
}
