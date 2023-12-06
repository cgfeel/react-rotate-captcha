# 更新日志

## 1.0.0 - 1.0.25

基于[[isszz/rotate-captcha](https://github.com/ahsankhatri/wordpress-auth-driver-laravel/tree/master)]做的二次开发，做了如下优化：

- 增加安全策略，适应不同的应用场景 [[查看](https://github.com/cgfeel/laravel-rotate-captcha#%E7%AD%96%E7%95%A5-policie)]
- 根据客户端情况提供了接口，可提供不同尺寸、格式的图片
- 开箱即用，无需额外操作
- 提供验证图片更新和清理的接口
- 迁移到`Laravel`生态环境，去掉了第三方提供的功能，包括：`cache`、`filesystem`、`encryption`
  - 采用`Laravel`能力，提供跨域支持
  - 采用`Laravel`能力，提供多个缓存系统支持
  - 采用`Laravel`能力，提供多个文件驱动引擎
  - 采用`Laravel`能力，提供多语言支持
