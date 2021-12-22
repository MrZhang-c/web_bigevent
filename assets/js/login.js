/* 第一遍 */
/* $(function () {
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
}) */

/* 第二遍 */
/* $(function () {
    // 登录和注册切换功能
    // 点击了“去注册账号”链接
    $('#link_reg').on('click', function () {
        $('.login-box').hide();
        $('.reg-box').show();
    })
    // 点击了“去登录”链接
    $('#link_login').on('click', function () {
        $('.reg-box').hide();
        $('.login-box').show();
    })

    // 完成自定义校验规则功能
    // 1.从layUI中获取 form对象
    let form = layui.form;
    let layer = layui.layer;
    // 2.通过 form.verify()函数自定义校验规则
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 自定义确认密码一致的校验规则
        repwd: function (value) {
            // 获取密码框中的值
            let pwd = $('.reg-box [name=password]').val();
            // 判断密码框和确认密码框中的密码是否一致
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    })

    // 完成注册功能
    // 监听注册form表单的提交事件
    $('#form_reg').on('submit', function (e) {
        // 阻止表单提交的默认行为
        e.preventDefault();
        // 快速获取form表单中的数据
        let data = $(this).serialize();
        // 发起Ajax请求，注册用户
        $.ajax({
            method: 'post',
            url: '/api/reguser',
            data: data,
            success(res) {
                // console.log(res);
                // 判断用户是否注册成功
                if (res.status !== 0) {
                    return layer.msg(res.message);
                }
                layer.msg(res.message);
                // 当用户注册完成后，返回到登录页面进行登录
                $('#link_login').click(); // 使系统模拟人的点击行为
            }
        })
    })

    // 完成登录功能
    // 监听登录表单的提交事件
    $('#form_login').submit(function (e) {
        // 阻止表单提交的默认行为
        e.preventDefault();
        // 快速的获取表单中的数据
        let data = $('#form_login').serialize();
        // 发起Ajax请求，登录用户
        $.ajax({
            method: 'POST',
            url: '/api/login',
            data: data,
            success(res) {
                console.log(res);
                // 判断用户是否登录成功
                if (res.status !== 0) {
                    return layer.msg(res.message);
                }
                layer.msg(res.message);
                // 当用户登录成功后，将获取到的token信息保存到本地存储中
                localStorage.setItem('token', res.token);
                // 当登录成功后，页面跳转到首页中
                location.href='index.html'
            }
        })
    })
}) */

/* 第三遍 */
/* $(function () {
    // 点击了“去注册账号”链接
    $('#link_reg').on('click', function () {
        $('.login-box').hide();
        $('.reg-box').show()
    })
    // 点击了“去登录”链接
    $('#link_login').on('click', function () {
        $('.reg-box').hide()
        $('.login-box').show()
    })

    // 自定义校验规则
    // 从layui中获取form对象
    let form = layui.form;
    let layer = layui.layer;
    form.verify({
        // 以数组的方式自定义校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 以函数的方式自定义校验规则，以形参的方式获取输入框中的内容
        repwd: function (value) {
            // 获取密码框中的内容,已属性名的查找方式获取
            let pwd = $('.reg-box [name=password]').val();
            // 判断两次密码是否输入的一致
            if (pwd !== value) {
                return '两次密码输入的不一致!';
            }
        }
    })

    // 监听注册表单的提交事件
    $('#form_reg').on('submit', function (e) {
        // 阻止表单提交默认行为
        e.preventDefault();
        // 快速的获取form表单中的内容
        let data = $(this).serialize();
        // 请求Ajax请求，来注册用户
        $.ajax({
            method: 'POST',
            url: '/api/reguser',
            data: data,
            success(res) {
                // console.log(res);
                // 判断用户是否注册成功
                if (res.status !== 0) {
                    return layer.msg(res.message);
                }
                layer.msg(res.message);
                // 当用户注册成功后，返回到登录页面进行登录
                $('#link_login').click(); // 使系统模拟人的点击行为
            }
        })
    })

    // 监听登录表单的提交事件
    $('#form_login').submit(function (e) {
        // 阻止表单提交的默认行为
        e.preventDefault();
        // 快速获取表单中的内容
        let data = $(this).serialize();
        // 发起Ajax请求，用户登录
        $.ajax({
            method: 'POST',
            url: '/api/login',
            data: data,
            success(res) {
                console.log(res);
                // 判断用户是否登录成功
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                // 当用户登录成功后，将获取到的token信息保存到本地存储中
                localStorage.setItem('token', res.token);
                // 当用户登录成功后，叫页面跳转到首页
                location.href = 'index.html'
            }
        })
    })
}) */

/* 第四遍 */
$(function () {
    // 点击了去注册账号
    $('#link_reg').on('click', function () {
        // 隐藏登录框，显示注册框
        $('.login-box').hide()
        // 显示注册框
        $('.reg-box').show()
    })

    // 点击了“去登录”按钮
    $('#link_login').on('click', function () {
        // 隐藏注册框，显示登录框
        $('.reg-box').hide()
        // 显示登录框
        $('.login-box').show()
    })

    // 自定义表单的验证规则
    layui.form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 自定义二次密码校验
        repwd(value) {
            if (value !== $('.reg-box [name=password]').val()) {
                return '两次密码输入的不一致!'
            }
        }
    })

    // 监听注册表单的注册按钮
    $('#form_reg').on('submit', function (e) {
        // 阻止表单的默认行为
        e.preventDefault();
        // 发起Ajax请求，注册用户
        $.ajax({
            method: 'POST',
            url: '/api/reguser',
            data: $(this).serialize(),
            success(res) {
                console.log(res);
                // 判断用户是否注册成功
                if (res.status !== 0) {
                    return layui.layer.msg(res.message);
                }
                // 表示注册成功
                layui.layer.msg(res.message);
                // 当用户注册成功后，使系统模拟人的点击行为，跳转回登录页中
                $('#link_login').click()
            }
        })
    })

    // 监听登录表单的提交事件
    $('#form_login').on('submit', function (e) {
        // 阻止表单的默认行为
        e.preventDefault();
        // 请求Ajax请求，登录用户
        $.ajax({
            method: 'POST',
            url: '/api/login',
            data: $(this).serialize(),
            success(res) {
                console.log(res);
                // 判断用户是否登录成功
                if (res.status !== 0) { 
                    return layui.layer.msg(res.message)
                }
                // 表示用户登录成功
                layui.layer.msg(res.message)
                // 登录成功后，将获取到的token信息保存到本地存储中
                localStorage.setItem('token',res.token)
                // 跳转到，首页
                location.href='index.html'
            }
        })
    })
})
