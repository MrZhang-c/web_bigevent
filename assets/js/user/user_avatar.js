$(function () {
    // 1.1 获取裁剪区域的 DOM 元素
    var $image = $('#image')
    // 1.2 配置选项
    const options = {
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
    }

    // 1.3 创建裁剪区域
    $image.cropper(options)

    // 为上传按钮绑定点击事件
    $('#btnChooseImage').on('click', function () {
        // 是程序模拟人的点击行为，从而达到上传文件的效果
        $('#file').click();
    })

    // 实现裁剪区域图片的替换
    // 为文件选择框绑定 change 事件
    $('#file').on('change', function (e) {
        // 获取用户选择的文件
        var filelist = e.target.files;
        // console.log(filelist);
        // 判断用户是否选择了文件
        if (filelist.length === 0) {
            return layui.layer.msg('请选择图片!');
        }

        // 1. 拿到用户选择的文件
        var file = e.target.files[0]


        // 2. 根据选择的文件，创建一个对应的 URL 地址：
        var newImgURL = URL.createObjectURL(file)

        // 3. 先`销毁`旧的裁剪区域，再`重新设置图片路径`，之后再`创建新的裁剪区域`：
        $image
            .cropper('destroy')      // 销毁旧的裁剪区域
            .attr('src', newImgURL)  // 重新设置图片路径
            .cropper(options)        // 重新初始化裁剪区域
    })


    // 将裁剪后的头像上传到服务器
    // 为确定按钮，绑定点击事件
    $('#btnUpload').on('click', function (e) {
        // 1.要拿到用户裁剪之后的头像
        var dataURL = $image
            .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
                width: 100,
                height: 100
            })
            .toDataURL('image/png')       // 将 Canvas 画布上的内容，转化为 base64 格式的字符串

        // 2.调用接口，把头像上传到服务器
        $.ajax({
            method: 'POST',
            url: '/my/update/avatar',
            data: { avatar: dataURL },
            success(res) {
                // console.log(res);
                // 判断头像是否上传成功
                if (res.status !== 0) {
                    return layui.layer.msg(res.message);
                }
                // 表示头像上传成功
                layui.layer.msg(res.message);
                // 同时也将父页面上的头像进行更新
                window.parent.getUserInfo();
            }
        })
    })
})