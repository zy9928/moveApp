const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ajax',
    proxy({
      target: 'http://m.maoyan.com',
      changeOrigin: true
    })
  )
}

//http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=B95293B0384F11EA8B343537749856ED77FB6EFBB95447D68E99F50321FB7D11&optimus_risk_level=71&optimus_code=10
