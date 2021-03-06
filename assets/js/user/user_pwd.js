/* 第一遍 */
/* $(function () {
    // 获取layui的form对象
    let form = layui.form;

    // 自定义校验规则
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        samePwd(value) {
            if (value === $('[name=oldPwd]').val()) {
                return '新密码，不能和原密码一致！'
            }
        },
        rePwd(value) {
            if (value !== $('[name=newPwd]').val()) {
                return '两次密码不一致！'
            }
        }
    })

    // 监听表单的提交事件
    $('.layui-form').submit(function (e) {
        // 阻止表单的默认提交行为
        e.preventDefault();
        // 发起Ajax请求，修改密码
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success(res) {
                console.log(res);
                // 判断用户是否更新密码成功
                if (res.status !== 0) {
                    return layui.layer.msg('更新失败' + res.message);
                }
                // 表示密码更新成功
                layui.layer.msg('密码更新成功，请重新登录！');
                // 重置表单
                // $('.layui-form')[0].reset();
                // 清空token信息
                localStorage.removeItem('token');
                // 从新跳回登录页面
                // location.href='../login.html';
                window.parent.location.href='../login.html'
            }
        })
    })
}) */

/* 第二遍 */
/* $(function () {
    // 自定义校验规则
    layui.form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        samePwd(value) {
            if (value === $('[name=oldPwd]').val()) {
                return '新密码，不能和旧密码一致!'
            }
        },
        rePwd(value) {
            if (value !== $('[name=newPwd]').val()) {
                return '两次密码输入不一致!'
            }
        }
    })

    // 监听表单的提交事件，完成修改密码
    $('.layui-form').on('submit', function (e) {
        // 阻止表单的提交默认行为
        e.preventDefault();
        // 发起Ajax请求，修改密码
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success(res) {
                console.log(res);
                // 判断密码是否修改成功
                if (res.status !== 0) {
                    return layui.layer.msg(res.message);
                }
                // 密码修改成功，进行提示
                layui.layer.msg(res.message);
                // 重置表单中的内容
                // $('.layui-form')[0].reset();

                // 密码更新成功后，清空token
                localStorage.removeItem('token');
                // 调用父页面的方
                window.parent.getUserInfo()
            }
        })
    })
}) */

/* 第三遍 */
/* $(function () {
    // 自定义校验规则
    layui.form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        samePwd(value) {
            if (value === $('[name=oldPwd]').val()) {
                return '旧密码不能与新密码一致!'
            }
        },
        rePwd(value) {
            if (value !== $('[name=newPwd]').val()) {
                return '两次密码不一致!'
            }
        }
    })

    // 监听表单的提交事件，完成更改密码
    $('.layui-form').submit(function (e) {
        // 阻止表单的默认提交行为
        e.preventDefault();
        // 发起Ajax请求，更改密码
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success(res) {
                console.log(res);
                // 判断密码是否更改成功
                if (res.status !== 0) { 
                    return layui.layer.msg(res.message);
                }
                // 表示密码更改成功,进行提示
                layui.layer.msg(res.message)
                // 清空token信息
                localStorage.removeItem('token')
                // 调用父页面的方法
                window.parent.getUserInfo()
            }
        })
    })
}) */

/* 第四遍 */
$(function () {
    // 自定义表单验证
    layui.form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        samePwd(value) {
            if (value === $('[name=oldPwd]').val()) {
                return '新密码不能和旧密码一致！'
            }
        },
        rePwd(value) {
            if (value !== $('[name=newPwd]').val()) {
                return '两次密码输入不一致！'
            }
        }
    })

    // 监听表单的提交事件，修改密码
    $('.layui-form').submit(function (e) {
        // 阻止表单的默认行为
        e.preventDefault();
        // 发起Ajax请求，修改密码
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success(res) {
                console.log(res);
                // 判断密码是否修改成功
                if (res.status !== 0) {
                    return layui.layer.msg(res.message)
                }
                // 表示密码修改成功
                layui.layer.msg(res.message);
                // 清空整个表单
                $('.layui-form')[0].reset()
                // 清空token
                localStorage.removeItem('token');
                // 从新调用父页面的方法
                window.parent.getUserInfo()
            }
        })
    })
})