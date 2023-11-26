var user='';
var pw='';
// 用于主页面验证是否是使用超级管理员登录的
var flag=false;

function check_login() {
    var name = $('#username').val();
    var password = $('#password').val();
    // 这里是登录密码和账号的设置
    if (name == "admin" && password == "123456"||name===user&&password===pw) {
      window.location.href = "../index.html"; // 跳转到指定URL
      $("#username").val("");
      $("#password").val("");
      
    }
    else {
        $('#log_form').removeClass('shake_effect');
        setTimeout(function () {
            $('#log_form').addClass('shake_effect');
        }, 1)
    }
}


function check_register() {
    var name = $('#r_username').val();
    var password = $('#r_password').val();
    var email = $('#r_email').val();
    if (name != "" && password != "" && email != "") {
      $("#r_username").val("");
      $("#r_password").val("");
      $("#r_email").val("");
      user=name;
      pw=password;
      flag = true;
      localStorage.setItem("user",user);
      localStorage.setItem ("flag",flag);
      // 这里是页面的跳转
      $('form').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 'slow');
    }
    else {
        $('#log_form').removeClass('shake_effect');
        setTimeout(function () {
            $('#log_form').addClass('shake_effect');
        }, 1)
    }
}

$(function () {
    $('#login').click(function () {
        check_login();
        return false;
    })
    $('#create').click(function () {
        check_register();
        return false;
    })
    $('.message a').click(function () {
        $('form').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 'slow');
        //animate() 方法执行 CSS 属性集的自定义动画。该方法通过CSS样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。
    })
})