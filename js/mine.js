$(document).ready(function() {
    var shownumber = 0;
    var count = 0;
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var Height = winHeight + "px";
    var distancex = winHeight / 2 - 200 + "px";
    var distancey = winWidth / 2 - 200 + "px";
    var showpic = winWidth / 2 - 90 + "px";
    var project = 0;
    var showtype = 'back';
    $(".showpage").height(winHeight);
    $(".myself").css('top', distancex);
    $(".showpic").css('left', showpic);
    $(".adviceshow").css('height', winHeight - 40);
    $(".advice-side-button").css('top', winHeight / 2);
    $(".advice-side-button").bind('click', function() {
        $(".advices").empty();
        $.ajax({
            type: 'get',
            url: 'server/getadvice.php',
            datatype: 'json',
            success: function(data) {
                data.forEach(function(item, index, array) {
                    var $auther = $('<div>').addClass('advice-auther').text("访客："+item.auther);
                    var $content = $('<div>').addClass('advice-content').text("留言："+item.advice);
                    var $advice = $('<div>').addClass('advice').append($auther, $content);
                    $('.advices').append($advice);
                })
            }
        });
        if (showtype == 'back') {
            $(".adviceshow").animate({ left: 0 }, {
                duration: 500,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".adviceshow").css('left', now + 'px');
                },
            });
            $(".advice-side-button").children('span').text("关闭留言栏");
            showtype = 'out';
        } else {
            $(".adviceshow").animate({ left: -200 }, {
                duration: 500,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".adviceshow").css('left', now + 'px');
                },
            });
            $(".advice-side-button").children('span').text("打开留言栏");
            showtype = 'back';
        }
    });
    $(window).bind('mousewheel', function(event, delta) {
        var scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (count == 0) {
            if (shownumber < 4 && shownumber > 0) {
                if (delta < 0) {
                    $(".showpage").eq(shownumber).slideUp('slow');
                    shownumber++;
                    $(".showpage").eq(shownumber).slideDown('slow');
                } else {
                    $(".showpage").eq(shownumber).slideUp('slow');
                    shownumber--;
                    $(".showpage").eq(shownumber).slideDown('slow');
                }
                count = 1;
            } else if (shownumber == 4) {
                if (delta > 0) {
                    $(".showpage").eq(shownumber).slideUp('slow');
                    shownumber--;
                    $(".showpage").eq(shownumber).slideDown('slow');
                }
                count = 1;
            } else {
                if (delta < 0) {
                    $(".showpage").eq(shownumber).slideUp('slow');
                    shownumber++;
                    $(".showpage").eq(shownumber).slideDown('slow');
                }
                count = 1;
            };
        } else {
            count = 0;
        };
        rollchange(shownumber);
    }); //滚动翻页
    function pagechage(number) {
        var count = 0;
        if (number > shownumber) {
            count = number - shownumber;
            for (var i = 0; i < count; i++) {
                $(".showpage").eq(shownumber).slideUp('slow');
                shownumber++;
                $(".showpage").eq(shownumber).slideDown('slow');
            }
        } else if (number < shownumber) {
            count = shownumber - number;
            for (var i = 0; i < count; i++) {
                $(".showpage").eq(shownumber).slideUp('slow');
                shownumber--;
                $(".showpage").eq(shownumber).slideDown('slow');
            }
        }
        rollchange(shownumber);
        count = 1;
    } //点击翻页
    function rollchange(number) {
        if (number == 1) {
            $(".sidebar").css('animation', 'roll_1 1s ease .3s forwards')
        } else if (number == 2) {
            $(".sidebar").css('animation', 'roll_2 1s ease .3s forwards')
        } else if (number == 3) {
            $(".sidebar").css('animation', 'roll_3 1s ease .3s forwards')
        } else if (number == 4) {
            $(".sidebar").css('animation', 'roll_4 1s ease .3s forwards')
        } else {
            $(".sidebar").css('animation', 'roll_0 1s ease .3s forwards')
        }
    }
    for (var i = 0; i <= 2; i++) {
        var delayT = i * 0.5 + "s";
        $(".rollcontent").eq(i).css('animation-delay', delayT);
    } //滚动显示延迟
    $("#begin").click(function() {
        pagechage(1);
    }); //开启旅程按钮功能
    $(".mainpage").click(function() {
        pagechage(0);
    }); //导航条1按钮
    $(".introducepage").click(function() {
        pagechage(1);
    }); //导航条2按钮
    $(".page3").click(function() {
        pagechage(2);
    }); //导航条3按钮
    $(".page4").click(function() {
        pagechage(3);
    }); //导航条4按钮
    $(".page5").click(function() {
        pagechage(4);
    });
    // 返回顶部
    $(".goTop").click(function() {
        if (shownumber != 0) {
            $(window).scrollTop(0);
            $(".showpage").eq(0).slideDown();
            $(".showpage").eq(shownumber).slideUp();
            shownumber = 0;
            rollchange(0);
        }
    });
    $(".connect-part").bind('mouseover', function() {
        $(this).children(".barcode").css('display', 'block');
    });
    $(".connect-part").bind('mouseout', function() {
        $(this).children(".barcode").css('display', 'none');
    });
    $(".offertype").bind('mouseover', function() {
        $(this).children(".specificOffer").css('display', 'block');
    });
    $(".offertype").bind('mouseout', function() {
        $(this).children(".specificOffer").css('display', 'none');
    });
    // 作品数据接收
    $.ajax({
            type: 'get',
            url: 'server/getprojects.php',
            datatype: 'json',
            success: function(data) {
                data.forEach(function(item, index, array) {
                    $('.item').eq(index).children('img').attr('src', item.picurl);
                    $('.item').eq(index).children('a').attr('href', item.link);
                    $('.item').eq(index).children('a').text(item.name);
                })
            }
        })
        // 左右按钮鼠标覆盖旋转
    $(".rightspace").bind('mouseover', function() {
        switch (project) {
            case 0:
                $(".rotate").css('animation', 'right1 3s ease forwards');
                project++;
                break;
            case 1:
                $(".rotate").css('animation', 'right2 3s ease forwards');
                project++;
                break;
            case 2:
                $(".rotate").css('animation', 'right3 3s ease forwards');
                project++;
                break;
            case 3:
                $(".rotate").css('animation', 'right4 3s ease forwards');
                project++;
                break;
            case 4:
                $(".rotate").css('animation', 'right5 3s ease forwards');
                project++;
                break;
            case 5:
                $(".rotate").css('animation', 'right6 3s ease forwards');
                project = 0;
                break;

        }
    });
    $(".leftspace").bind('mouseover', function() {
        switch (project) {
            case 0:
                $(".rotate").css('animation', 'left1 3s ease forwards');
                project = 5;
                break;
            case 1:
                $(".rotate").css('animation', 'left6 3s ease forwards');
                project--;
                break;
            case 2:
                $(".rotate").css('animation', 'left5 3s ease forwards');
                project--;
                break;
            case 3:
                $(".rotate").css('animation', 'left4 3s ease forwards');
                project--;
                break;
            case 4:
                $(".rotate").css('animation', 'left3 3s ease forwards');
                project--;
                break;
            case 5:
                $(".rotate").css('animation', 'left2 3s ease forwards');
                project--;
                break;
        }
    });
    // 传递数据到后台功能
    $("#submit").bind('click', function() {
        $.ajax({
            url: 'server/postthink.php',
            type: 'post',
            data: {
                newname: $('#adminName').val(),
                newconnection: $('#contactWay').val(),
                newadvice: $('#reviewDetails').val(),
            },
            datatype: 'json',
            success: function(data) {
                if (data) {
                    alert("留言成功");
                }
            }
        });
    })
})
