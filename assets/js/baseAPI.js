// 注意：每次调用 $.get 或 $.POST 或 $.ajax 的时候
// 都会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    // console.log(options);
    // 在发起真正的ajax请求之前，我们先统一的拼接请求的跟路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url;
    // console.log(options.url);

    // 统一为有权限的接口，设置 headers 请求头
    if (options.url.indexOf('/my/') !== -1) { // 判断请求的URL中是否有my，如果有添加请求头，没有则不添加
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }

    // 全局统一挂载 complete 回调函数
    options.complete = function (aa) {
        // console.log('执行了 complete 回调：')
        // console.log(res)
        // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
        if (aa.responseJSON.status === 1 && aa.responseJSON.message === '身份认证失败！') {
            // 1.强制清空token信息
            localStorage.removeItem('token');
            // 2.重新跳转回登录页面
            location.href = 'login.html'
        }
    }
})