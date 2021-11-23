$(function () {
    // 点击“去注册账号”的链接
    $('#link_reg').on('click', function () {
        $('.reg-box').show();
        $('.login-box').hide();
    })

    // 点击“去登录”的链接
    $('#link_login').on('click', function () {
        $('.reg-box').hide();
        $('.login-box').show();
    })

    // 1.从layUI中获取 form对象
    let form = layui.form;
    let layer = layui.layer;
    // 2.通过 form.verify()函数自定义校验规则
    form.verify({
        // 自定义了一个叫pwd的校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 校验两次密码是否一致的规则
        repwd: function (value) {
            // 可以通过形参拿到的是确认密码框中的内容
            // 还需要拿到密码框中的内容
            // 然后进行等号判断
            // 如果判断失败,则return一个错误的提示消息即可
            let pwd = $('.reg-box [name=password]').val();
            if (pwd !== value) {
                return '两次密码不一致!';
            }
        }
    })

    // 监听注册表单的提交事件
    $('#form_reg').on('submit', function (e) {
        // 阻止表单提交的默认行为
        e.preventDefault();
        // 获取表单中的内容,已属性查询的方式来获取
        let data = {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }
        // console.log(data);
        // 发起Ajax的POST请求，注册用户
        $.post('/api/reguser', data, function (res) {
            // console.log(res);
            // 判断用户是否注册成功
            if (res.status !== 0) {
                return layer.msg(res.message);
            }
            layer.msg(res.message); // 消息提示
            // 当用户注册完成后，自动的跳转到登录页面
            $('#link_login').click(); // 系统模拟人的点击行为
        })
    })

    // 监听登录表单的提交事件
    $('#form_login').submit(function (e) {
        // 阻止表单提交的默认行为
        e.preventDefault();
        // 快速的获取表单中的内容
        let data = $(this).serialize();
        // 发起Ajax请求，进行登录
        $.ajax({
            method: 'post',
            url: '/api/login',
            data: data,
            success(res) {
                console.log(res);
                // 判断用户是否登录成功
                if (res.status !== 0) {
                    return layer.msg(res.message);
                }
                layer.msg(res.message);
                // 登录成功后，将获取到的token信息保存到本地存储中
                localStorage.setItem('token', res.token);
                // 登录成功后，页面跳转到后台主页
                location.href='index.html'
            }
        })
    })
})