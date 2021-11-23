// 注意：每次调用 $.get 或 $.POST 或 $.ajax 的时候
// 都会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    // console.log(options);
    // 在发起真正的ajax请求之前，我们先统一的拼接请求的跟路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url;
    // console.log(options.url);
})