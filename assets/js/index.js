$(function () {
    // 调用 getUserInfo 函数获取用户基本信息
    getUserInfo();

    // 实现退出功能
    $('#btnLogout').on('click', function (e) { // 点击按钮实现退出功能
        // 提示用户是否确认退出
        layui.layer.confirm('确认退出登录吗?', { icon: 3, title: '提示' }, function (index) {
            // 1.清空本地存储的token信息
            localStorage.removeItem('token');

            // 2.重新跳转到登录页面
            location.href = 'login.html'

            layui.layer.close(index)
        })
    })

})

// 获取用户的基本信息
function getUserInfo() {
    // 发起Ajax请求获取用户基本信息
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        // 设置 headers 就是请求头配置对象
        // headers: {
        //     Authorization: localStorage.getItem('token') || ''
        // },
        success(res) {
            // console.log(res);
            // 判断用户信息是否获取成功
            if (res.status !== 0) {
                return layui.layer.msg(res.message);
            }
            // 调用 renderAvatar 渲染用户头像
            renderAvatar(res.data);
        },
        /* // 在调用有权限接口的时候，指定`complete`回调函数
        complete(res) { // // 不论成功还是失败，最终都会调用 complete 回调函数
            console.log('执行了 complete 回调!');
            console.log(res);
            // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
            if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
                // 1.强制清空token
                localStorage.removeItem('token');
                // 2.强制跳转到登录页面
                location.href = 'login.html';
            }
        } */
    })
}

// 渲染用户的头像
function renderAvatar(res) {
    // 1.获取用户的名称
    var name = res.nickname || res.username;
    // 2.设置欢迎文本
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name);
    // 3.按需渲染用户的头像
    if (res.user_pic !== null) {
        // 3.1 渲染图片头像
        $('.layui-nav-img').attr('src', res.user_pic).show();
        // 将文字头像隐藏
        $('.text-avatar').hide()
    } else {
        // 3.2 渲染文本头像
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show();
        // 将图片头像隐藏
        $('.layui-nav-img').hide();
    }
}