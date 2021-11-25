$(function () {
    // 获取layui中的form对象
    let form = layui.form;

    // 自定义校验规则
    form.verify({
        nickname(value) {
            if (value.length > 6) {
                return '昵称长度必须在 1~6 个字符之间'
            }
        }
    })

    // 调用 initUserInfo 初始化用户的基本信息
    initUserInfo()

    // 初始化用户的基本信息
    function initUserInfo() {
        // 发起Ajax请求，获取用户的基本信息
        $.ajax({
            method: 'get',
            url: '/my/userinfo',
            success(res) {
                // console.log(res);
                // 判断用户是否请求成功
                if (res.status !== 0) {
                    return layui.layer.msg(res.message)
                }
                // 表示接口请求成功
                // layui.layer.msg(res.message)
                // 调用 `form.val()` 方法快速的为表单赋值
                form.val('formUserInfo', res.data)
            }
        })
    }


    // 阻止表单的默认重置行为，再重新获取用户信息即可
    // 重置表单的数据
    $('#btnReset').on('click', function (e) {
        // 阻止表单默认重置行为
        e.preventDefault();
        // 从新调用获取用户基本信息的接口
        initUserInfo();
    })

    // 监听表单的提交事件
    $('.layui-form').on('submit', function (e) {
        // 阻止表单的默认提交行为
        e.preventDefault();
        // 快速的获取form中的数据
        let data = $(this).serialize();
        // 发起Ajax请求，提交用户修改的基本数据
        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: data,
            success(res) {
                // console.log(res);
                // 判断用户是否修改成功
                if (res.status !== 0) {
                    layui.layer.msg(res.message);
                }
                // 表示修改成功
                layui.layer.msg(res.message);
                // 调用父页面中的方式，从新渲染用户的头像和用户的信息
                window.parent.getUserInfo()
            }
        })
    })
})

