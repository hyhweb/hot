'use strict';

module.exports = appInfo => {
  const config = {
      cluster :{
          listen: {
              port: 7001,
              hostname: 'localhost',
              // path: '/var/run/egg.sock',
          }
      },
      mysql: {
          // 单数据库信息配置
          client: {
              // host
              host: '192.168.67.128',
              // 端口号
              port: '3306',
              // 用户名
              user: 'test',
              // 密码
              password: '123456',
              // 数据库名
              database: 'hotsale',
          },
          // 是否加载到 app 上，默认开启
          app: true,
          // 是否加载到 agent 上，默认关闭
          agent: false,
      },
    security:{
          enable:false,
        xframe:{
            enable:false,
            value:'ALLOW-FROM: http://10.1.0.100:7001'
        },
        csrf: {
            enable:false,
            ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
        },
        methodnoallow: {
            enable: false
        },
        domainWhiteList: [ 'http://127.0.0.1:8081','http://10.1.0.100:7001','http://127.0.0.1:8000','http://192.168.67.128:7001']
    },
      cors:{
          allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTION',
          credentials:true
      }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1529412423357_4960';

  // add your config here
  config.middleware = [];

  return config;
};
