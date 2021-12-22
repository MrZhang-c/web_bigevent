/* 第一遍 */
/* $(function () {
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
 */

/* 第二遍 */
/* $(function () {
    // 自定义校验规则
    layui.form.verify({
        nickname(value) {
            if (value.length > 6) {
                return '昵称不能超过 1~6 位!'
            }
        }
    })

    // 初始化用户的基本信息
    initUserInfo()

    // 完成重置功能
    $('#btnReset').on('click', function (e) { // 为重置按钮绑定点击事件
        // 阻止表单重置的默认行为
        e.preventDefault();
        // 重新调用初始化用户的函数
        initUserInfo()
    })

    // 监听表单的提交事件，完成更改用户的基本信息
    $('.layui-form').on('submit', function (e) {
        // 阻止表单提交的默认行为
        e.preventDefault();
        // 发起Ajax请求，修改用户的基本信息
        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success(res) {
                // console.log(res);
                // 判断用户是否修改成功
                if (res.status !== 0) { 
                    return layui.layer.msg(res.message)
                }
                layui.layer.msg(res.message)
                // 用户信息修改成功后，要渲染父页面的信息
                window.parent.getUserInfo(); // 调用父页面的方法
            }
        })
    })
})

function initUserInfo() {
    // 发起Ajax请求，获取用户基本信息
    $.ajax({
        method: 'get',
        url: '/my/userinfo',
        success(res) {
            // console.log(res);
            // 判断用户是否请求成功
            if (res.status !== 0) {
                return layui.layer.msg(res.message);
            }
            // 表示请求成功，调用 `form.val()` 方法快速的为表单赋值
            layui.form.val('formUserInfo', res.data)
        }
    })
} */

/* 第三遍 */
/* $(function () {
    // 自定义校验规则
    layui.form.verify({
        nickname(value) {
            if (value.length > 6) {
                return '昵称不能超过 1~6 位!'
            }
        }
    })

    // 调用初始化用户基本信息的函数
    initUserInfo();

    // 完成重置功能
    $('#btnReset').on('click', function (e) {
        // 阻止表单重置的默认行为
        e.preventDefault();
        // 从新初始化用户的基本信息
        initUserInfo();
    })

    // 监听表单的提交事件，完成用户基本信息的更新
    $('.layui-form').submit(function (e) {
        // 阻止表单的默认提交行为
        e.preventDefault();
        // 发起Ajax请求，更改用户的基本信息
        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success(res) {
                // console.log(res);
                // 判断用户信息是否修改成功
                if (res.status !== 0) { 
                    return layui.layer.msg(res.message);
                }
                // 表示修改成功，提示用户
                layui.layer.msg(res.message)
                // 用户更改成功后，将父页面的信息也进行更新
                window.parent.getUserInfo() // 调用父页面的方法
            }
        })
    })
})

// 初始化用户的基本信息
function initUserInfo() {
    // 发起Ajax请求，获取用户的基本信息
    $.ajax({
        method: 'get',
        url: '/my/userinfo',
        success(res) {
            // console.log(res);
            // 判断用户是否获取成功
            if (res.status !== 0) {
                return layui.layer.msg(res.message);
            }
            // 表示获取成功,调用 form.val() 方法获取的为form表单赋值
            layui.form.val('formUserInfo', res.data);
        }
    })
} */

$(function () {
    // 自定义校验规则
    layui.form.verify({
        nickname(value) {
            if (value.length > 6) {
                return '昵称的长度只能到 1 ~6 位字符'
            }
        }
    })

    // 调用initUserInfo函数，初始化用户的基本信息
    initUserInfo();

    // 完成重置功能
    $('#btnReset').on('click', function (e) {
        // 阻止重置按钮默认行为
        e.preventDefault();
        // 重新调用initUserInfo函数，从新初始化用户信息
        initUserInfo()
    })

    // 监听表单的提交事件，修改用户信息
    $('.layui-form').submit(function (e) {
        // 阻止表单的提交的默认行为
        e.preventDefault();
        // 发起Ajax请求，修改用户的信息
        $.ajax({
            method: "POST",
            url: '/my/userinfo',
            data: $(this).serialize(),
            success(res) {
                console.log(res);
                // 判断用户是否修改成功
                if (res.status !== 0) { 
                    layui.layer.msg(res.message)
                }
                // 表示修改成功,则进行提示
                layui.layer.msg(res.message)
                // 用户的信息修盖完毕后，将首页的信息也进行更新，可以直接调用父页面的方法来进行更新
                window.parent.getUserInfo()
            }
        })
    })
})

// 初始化用户的基本信息
function initUserInfo() {
    // 发起Ajax请求，获取用户的信息
    $.ajax({
        method: 'get',
        url: '/my/userinfo',
        success(res) {
            // console.log(res);
            // 判断用户是否获取成功
            if (res.status !== 0) {
                return layui.layer.msg(res.message)
            }
            // 表示获取成功，调用 form.val() 方法，为表单快速的赋值
            layui.form.val('formUserInfo', res.data)
        }
    })
}