# 更新日志

## 1.0.0 - 1.0.25

基于[[isszz/rotate-captcha](https://github.com/ahsankhatri/wordpress-auth-driver-laravel/tree/master)]做的二次开发，做了如下优化：

- 增加安全策略，适应不同的应用场景 [[查看](https://github.com/cgfeel/react-rotate-captcha#-设计思路-design)]
- 根据客户端情况提供了接口，可提供不同尺寸、格式的图片
- 简化组件绑定的数据对象，而选择通过`useRef`的方式进行交互，尽可能减少因数据变化产生重复渲染
- 添加支持多语言
- 添加支持多主题
- 去掉了原有通过配置文件来配置主题，统一修改为通过CSS变量改变主题
- 支持多种方式唤起验证
- 提供物料
