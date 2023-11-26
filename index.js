

$(function () {
    $(".sidebar-link").click(function () {
        $(".sidebar-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
});

// 清除localstorage
// $(function clearStorage() {
//     if (localStorage.getItem("u")) {
//         localStorage.clear();
//         alert("清除成功");
//     }
//     else {
//         localStorage.setItem("u", "1");
//     }
// })

$(window)
    .resize(function () {
        if ($(window).width() > 1090) {
            $(".sidebar").removeClass("collapse");
        } else {
            $(".sidebar").addClass("collapse");
        }
    })
    .resize();

const allVideos = document.querySelectorAll(".video");

allVideos.forEach((v) => {
    v.addEventListener("mouseover", () => {
        const video = v.querySelector("video");
        video.play();
    });
    v.addEventListener("mouseleave", () => {
        const video = v.querySelector("video");
        video.pause();
    });
});




$(function () {
    $(".logo, .logo-expand, .discover").on("click", function (e) {
        $(".main-container").removeClass("show");
        $(".main-container").scrollTop(0);
    });

    //! 精髓就是显示一个页面，关闭所有页面

    // 推荐作品
    // $(".trending, .video").on("click", function (e) {
    //   //添加一个 "show" 类名到类名为 "main-container" 的元素中
    //   $(".main-container").addClass("show");
    //   //滚动条回到顶部 这是那个动态效果
    //   $(".main-container").scrollTop(0);
    //   //移除类名为 "is-active" 的元素 左边框的元素变化
    //   $(".sidebar-link").removeClass("is-active");
    //   //添加一个 "is-active" 类名到类名为 "trending" 的元素中
    //   $(".trending").addClass("is-active");
    //   //打开推荐作品
    //   $(".stream-area").show();
    //   $(".ranklistIframe").hide();
    //   $(".newMessageIframe").hide();
    //   $(".productionDisplayIframe").hide();
    //   $(".insertPictureIframe").hide();
    //   $(".cartoonIframe").hide();
    //   $(".novelIframe").hide();
    //   $(".aboutusIframe").hide();
    //   console.log("推荐作品");
    // });

    //排行榜
    $(".ranklist, .video").on("click", function (e) {
        $(".main-container").addClass("show");
        $(".main-container").scrollTop(0);
        $(".sidebar-link").removeClass("is-active");
        $(".ranklist").addClass("is-active");
        // 显示排行榜
        $(".ranklistIframe").show();
        $(".stream-area").hide();
        $(".newMessageIframe").hide();
        $(".productionDisplayIframe").hide();
        $(".insertPictureIframe").hide();
        $(".cartoonIframe").hide();
        $(".novelIframe").hide();
        $(".aboutusIframe").hide();
        $(".recommendIframe").hide();

        console.log("排行榜");
    });

    //新消息
    $(".newmessage, .video").on("click", function (e) {
        $(".main-container").addClass("show");
        $(".main-container").scrollTop(0);
        $(".sidebar-link").removeClass("is-active");
        $(".newmessage").addClass("is-active");
        // 显示新消息
        $(".newMessageIframe").show();
        $(".stream-area").hide();
        $(".ranklistIframe").hide();
        $(".productionDisplayIframe").hide();
        $(".insertPictureIframe").hide();
        $(".cartoonIframe").hide();
        $(".novelIframe").hide();
        $(".recommendIframe").hide();
        $(".aboutusIframe").hide();
        console.log("新消息");
    });

    //作品展示
    $(".labeldisplay, .video").on("click", function (e) {
        $(".main-container").addClass("show");
        $(".main-container").scrollTop(0);
        $(".sidebar-link").removeClass("is-active");
        $(".labeldisplay").addClass("is-active");
        // 显示作品展示
        $(".newMessageIframe").hide();
        $(".stream-area").hide();
        $(".ranklistIframe").hide();
        $(".productionDisplayIframe").show();
        $(".insertPictureIframe").hide();
        $(".recommendIframe").hide();
        $(".cartoonIframe").hide();
        $(".novelIframe").hide();
        $(".aboutusIframe").hide();
        console.log("作品展示");
    });

    //插画
    $(".insertpicture, .video").on("click", function (e) {
        $(".main-container").addClass("show");
        $(".main-container").scrollTop(0);
        $(".sidebar-link").removeClass("is-active");
        $(".insertpicture").addClass("is-active");
        // 显示插画
        $(".newMessageIframe").hide();
        $(".stream-area").hide();
        $(".ranklistIframe").hide();
        $(".productionDisplayIframe").hide();
        $(".recommendIframe").hide();
        $(".insertPictureIframe").show();
        $(".cartoonIframe").hide();
        $(".novelIframe").hide();
        $(".aboutusIframe").hide();
        console.log("插画");
    });

    //漫画
    $(".cartoon, .video").on("click", function (e) {
        $(".main-container").addClass("show");
        $(".main-container").scrollTop(0);
        $(".sidebar-link").removeClass("is-active");
        $(".cartoon").addClass("is-active");
        // 显示漫画
        $(".newMessageIframe").hide();
        $(".stream-area").hide();
        $(".ranklistIframe").hide();
        $(".productionDisplayIframe").hide();
        $(".insertPictureIframe").hide();
        $(".cartoonIframe").show();
        $(".recommendIframe").hide();
        $(".novelIframe").hide();
        $(".aboutusIframe").hide();
        console.log("漫画");
    });

    //小说
    $(".novel, .video").on("click", function (e) {
        $(".main-container").addClass("show");
        $(".main-container").scrollTop(0);
        $(".sidebar-link").removeClass("is-active");
        $(".novel").addClass("is-active");
        // 显示小说
        $(".newMessageIframe").hide();
        $(".stream-area").hide();
        $(".ranklistIframe").hide();
        $(".productionDisplayIframe").hide();
        $(".insertPictureIframe").hide();
        $(".cartoonIframe").hide();
        $(".novelIframe").show();
        $(".recommendIframe").hide();
        $(".aboutusIframe").hide();
        console.log("小说");
    });

    //关于我们
    $(".aboutus, .video").on("click", function (e) {
        $(".main-container").addClass("show");
        $(".main-container").scrollTop(0);
        $(".sidebar-link").removeClass("is-active");
        $(".aboutus").addClass("is-active");
        // 显示关于我们
        $(".newMessageIframe").hide();
        $(".stream-area").hide();
        $(".ranklistIframe").hide();
        $(".productionDisplayIframe").hide();
        $(".insertPictureIframe").hide();
        $(".cartoonIframe").hide();
        $(".novelIframe").hide();
        $(".aboutusIframe").show();
        $(".recommendIframe").hide();
        console.log("关于我们");
    });

    //推荐作品

    $(".trending, .video").on("click", function (e) {
        $(".main-container").addClass("show");
        $(".main-container").scrollTop(0);
        $(".sidebar-link").removeClass("is-active");
        $(".trending").addClass("is-active");
        // 显示关于我们
        $(".newMessageIframe").hide();
        $(".stream-area").hide();
        $(".ranklistIframe").hide();
        $(".productionDisplayIframe").hide();
        $(".insertPictureIframe").hide();
        $(".cartoonIframe").hide();
        $(".novelIframe").hide();
        $(".aboutusIframe").hide();
        $(".recommendIframe").show();
        console.log("推荐作品");
    });

    //VIP

    $(".notify, .video").on("click", function (e) {
        $(".main-container").addClass("show");
        $(".main-container").scrollTop(0);
        $(".sidebar-link").removeClass("is-active");
        // $(".trending").addClass("is-active");
        // 显示关于我们
        $(".newMessageIframe").hide();
        $(".stream-area").hide();
        $(".ranklistIframe").hide();
        $(".productionDisplayIframe").hide();
        $(".insertPictureIframe").hide();
        $(".cartoonIframe").hide();
        $(".novelIframe").hide();
        $(".aboutusIframe").hide();
        $(".recommendIframe").hide();
        $(".vipIframe").show();
        console.log("VIP");
    });

    //视频播放

    $(".video").click(function () {
        var source = $(this).find("source").attr("src");
        var title = $(this).find(".video-name").text();
        var person = $(this).find(".video-by").text();
        var img = $(this).find(".author-img").attr("src");
        $(".video-stream video").stop();
        $(".video-stream source").attr("src", source);
        $(".video-stream video").load();
        $(".video-p-title").text(title);
        $(".video-p-name").text(person);
        $(".video-detail .author-img").attr("src", img);
    });
});



// 右上角的用户头像 按钮那里

$(function () {
    var buttonText = $(".user-name");
    if (!localStorage.getItem("flag")) {
        buttonText.text("admin");
    } else {
        if (localStorage.getItem("user") !== "") {
            buttonText.text(localStorage.getItem("user"));
        } else {
            buttonText.text("登录");
        }
    }

    var VIP = $(".VIP");
    var vipColor = $("#vipElement");
    if (localStorage.getItem("vip") == 10) {
        VIP.text("VIP");
        vipColor.css("color", "red");
    } else if (localStorage.getItem("vip") == 20) {
        VIP.text("SVIP");
        vipColor.css("color", "yellow");
    } else {
        VIP.text("普通用户");
        vipColor.css("color", "white");
    }

    //   $(".user-name").click(function () {
    //     if (buttonText.text() == "登录") {
    //         buttonText.text("注册");
    //     } else {
    //         buttonText.text("登录");
    //     }
    //     });

});
