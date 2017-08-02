$(document).ready(function() {
    var shownumber = 0;
    var count = 0;
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var distancex = winHeight / 2 - 200 + "px";
    var showpic = winWidth / 2 - 90 + "px";
    var project = 0;
    var showtype = 'back';
    var showpage = 0;
    var showheight = 0;
    var changecount = 0;
    var sidewidth = 0;
    var sidelenth = winWidth / 1.5;

    function screenset() {
        winHeight = $(window).height();
        $("body").css('height', winHeight); //重置整体高度
        $(".showpage").height(winHeight); //重置页面高度
        $(".myself").css('top', distancex);
        $(".showpic").css('left', showpic);
        $(".sidenav").css('height', winHeight);
    };
    // 屏幕尺寸变化样式控制
    if (winWidth < 760) {
        distancex = winHeight / 3 - 140;
        $(".left").addClass('nav-logo-small');
        $(".left img").css('display', 'none');
        $(".right").css('display', 'none');
        $(".nav-menu").css('display', 'inline-block');
        $("header").css('width', winWidth);
        $("na").css('height', '30px').css('line-height', '30px');
        $("#reviewDetails").attr('cols', '39');
        $(".sidenav").css('height', winHeight).css('width', sidelenth).css('left', -winWidth / 1.5);
    };
    $("body").css('height', winHeight);
    $(".showpage").height(winHeight);
    $(".myself").css('top', distancex);
    $(".showpic").css('left', showpic);
    // 侧边栏设置
    $(".adviceshow").css('height', winHeight - 40);
    $(".advice-side-button").css('top', winHeight / 2);
    $(".advice-side-button").bind('click', function() {
        $(".advices").empty();
        $.ajax({
            type: 'get',
            url: 'server/getadvice.php',
            datatype: 'json',
            success: function(data) {
                console.log(data);
                for (var index = 0; index <= data.length - 1; index++) {
                    var item = data[index];
                    var $auther = $('<div>').addClass('advice-auther').text("访客：" + item.auther);
                    var $content = $('<div>').addClass('advice-content').text("留言：" + item.advice);
                    var $advice = $('<div>').addClass('advice').append($auther, $content);
                    $('.advices').append($advice);
                }
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
    // 侧边导航栏设置
    $(".menu-button").bind('click', function() {
        $(".sidenav").css('display', 'block').animate({ left: 0 }, {
            duration: 500,
            easing: "linear",
            queue: false,
            step: function(now, fx) {
                $(".sidenav").css('left', now + 'px');
            },
        });
    });
    $(".sidenav").bind('touchstart', function(e) {
        sidewidth = e.originalEvent.changedTouches[0].screenX;
    });
    $(".sidenav").bind('touchmove', function(e) {
        var movewidth = e.originalEvent.changedTouches[0].screenX - sidewidth;
        if (movewidth < 0) {
            $(".sidenav").animate({ left: movewidth }, {
                duration: 100,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".sidenav").css('left', now + 'px');
                },
            });
        }
    });
    $(".sidenav").bind('touchend', function(e) {
        var movewidth = e.originalEvent.changedTouches[0].screenX - sidewidth;
        var realwidth = Math.abs(movewidth);
        if (realwidth > sidelenth / 2) {
            $(".sidenav").css('display', 'block').animate({ left: -sidelenth }, {
                duration: 500,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".sidenav").css('left', now + 'px');
                },
            });
        } else {
            $(".sidenav").css('display', 'block').animate({ left: 0 }, {
                duration: 500,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".sidenav").css('left', now + 'px');
                },
            });
        }
    });
    // pc端页面切换
    $(window).bind('mousewheel', function(event, delta) {
        var scrollHeight = $(window).scrollTop();
        if (count == 0) {
            if (shownumber < 4 && shownumber > 0) {
                if (delta < 0) {
                    $(".showpage").eq(shownumber).slideUp();
                    shownumber++;
                    $(".showpage").eq(shownumber).slideDown();
                } else {
                    $(".showpage").eq(shownumber).slideUp();
                    shownumber--;
                    $(".showpage").eq(shownumber).slideDown();
                }
                count = 1;
            } else if (shownumber == 4) {
                if (delta > 0) {
                    $(".showpage").eq(shownumber).slideUp();
                    shownumber--;
                    $(".showpage").eq(shownumber).slideDown();
                }
                count = 1;
            } else {
                if (delta < 0) {
                    $(".showpage").eq(shownumber).slideUp();
                    shownumber++;
                    $(".showpage").eq(shownumber).slideDown();
                }
                count = 1;
            };
        } else {
            count = 0;
        };
        rollchange(shownumber);
    }); //滚动翻页
    function pagechange(number) {
        var count = 0;
        if (number > shownumber) {
            count = number - shownumber;
            for (var i = 0; i < count; i++) {
                $(".showpage").eq(shownumber).slideUp();
                shownumber++;
                $(".showpage").eq(shownumber).slideDown();
            }
        } else if (number < shownumber) {
            count = shownumber - number;
            for (var i = 0; i < count; i++) {
                $(".showpage").eq(shownumber).slideUp();
                shownumber--;
                $(".showpage").eq(shownumber).slideDown();
            }
        }
        rollchange(shownumber);
        count = 1;
    } //点击翻页
    function rollchange(number) {
        if (number == 1) {
            $(".sidebar").attr('id', 'roll-one');
        } else if (number == 2) {
            $(".sidebar").attr('id', 'roll-two');
        } else if (number == 3) {
            $(".sidebar").attr('id', 'roll-three');
        } else if (number == 4) {
            $(".sidebar").attr('id', 'roll-four');
        } else {
            $(".sidebar").attr('id', 'roll-zero');
        }
    }
    for (var i = 0; i <= 2; i++) {
        var delayT = i * 0.5 + "s";
        $(".rollcontent").eq(i).css('animation-delay', delayT);
    } //滚动显示延迟
    $("#begin").click(function() {
        pagechange(1);
    }); //开启旅程按钮功能
    $(".mainpage").click(function() {
        pagechange(0);
    }); //导航条1按钮
    $(".introducepage").click(function() {
        pagechange(1);
    }); //导航条2按钮
    $(".page3").click(function() {
        pagechange(2);
    }); //导航条3按钮
    $(".page4").click(function() {
        pagechange(3);
    }); //导航条4按钮
    $(".page5").click(function() {
        pagechange(4);
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
    // 联系方式展开
    $(".connect-part").bind('mouseover', function() {
        $(this).children(".barcode").css('display', 'block');
    });
    $(".connect-part").bind('mouseout', function() {
        $(this).children(".barcode").css('display', 'none');
    });
    // 技能展示
    $(".offertype").bind('mouseover', function() {
        if (winWidth < 760) {
            $(".specificOffer").css('width', winWidth * 0.9);
        };
        $(this).children(".specificOffer").css('display', 'block');
    });
    $(".offertype").bind('mouseout', function() {
        if (winWidth < 760) {
            $(".specificOffer").css('width', winWidth * 0.9);
        };
        $(this).children(".specificOffer").css('display', 'none');
    });
    // 作品数据接收
    $.ajax({
        type: 'get',
        url: 'server/getprojects.php',
        datatype: 'json',
        success: function(data) {
            for (var index = 0; index <= data.length - 1; index++) {
                var item = data[index];
                $('.item').eq(index).children('img').attr('src', item.picurl);
                $('.item').eq(index).children('a').attr('href', item.link);
                $('.item').eq(index).children('a').text(item.name);
            }
        }
    })
    // 左右按钮鼠标覆盖旋转
    $(".rightspace").bind('mouseover', function() {
        switch (project) {
            case 0:
                $(".rotate").attr('id', 'right-one');
                project++;
                break;
            case 1:
                $(".rotate").attr('id', 'right-two');
                project++;
                break;
            case 2:
                $(".rotate").attr('id', 'right-three');
                project++;
                break;
            case 3:
                $(".rotate").attr('id', 'right-four');
                project++;
                break;
            case 4:
                $(".rotate").attr('id', 'right-five');
                project++;
                break;
            case 5:
                $(".rotate").attr('id', 'right-six');
                project = 0;
                break;

        }
    });
    $(".leftspace").bind('mouseover', function() {
        switch (project) {
            case 0:
                $(".rotate").attr('id', 'left-one');
                project = 5;
                break;
            case 1:
                $(".rotate").attr('id', 'left-two');
                project--;
                break;
            case 2:
                $(".rotate").attr('id', 'left-five');
                project--;
                break;
            case 3:
                $(".rotate").attr('id', 'left-four');
                project--;
                break;
            case 4:
                $(".rotate").attr('id', 'left-five');
                project--;
                break;
            case 5:
                $(".rotate").attr('id', 'left-six');
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
    });
    // 点击翻页
    $(".pagechange").on('click', function() {
        showpage++;
        pagechange(showpage);
    });
    $(".showpage").bind('touchstart', function(e) {
        showheight = e.originalEvent.changedTouches[0].screenY;
        $(".sidenav").css('display', 'block').animate({ left: -sidelenth }, {
            duration: 500,
            easing: "linear",
            queue: false,
            step: function(now, fx) {
                $(".sidenav").css('left', now + 'px');
            },
        });
        $(".specificOffer").css('display', 'none');
    });
    $(".showpage").bind('touchmove', function(e) {
        screenset();
    })
    var showscoll = 0;
    $(".showpage").bind('touchend', function(e) {
        var moveheight = e.originalEvent.changedTouches[0].screenY - showheight;
        var changelenth = winHeight / 12;
        var reallenth = Math.abs(moveheight);
        screenset();
        if (reallenth > changelenth) {
            if (moveheight > 0) {
                showscoll = showscoll - winHeight;
                $(".wapper").animate({ fontsize: showscoll }, {
                    duration: 500,
                    easing: "linear",
                    queue: false,
                    step: function(now, fx) {
                        $(window).scrollTop(now);
                    },
                });
                // alert("下移");
            } else if (moveheight < 0) {
                showscoll = showscoll + winHeight;
                $(".wapper").animate({ fontsize: showscoll }, {
                    duration: 500,
                    easing: "linear",
                    queue: false,
                    step: function(now, fx) {
                        $(window).scrollTop(now);
                    },
                });
                // alert("上翻");
            }
        };
    });
    // 照片展开
    var person = 0;
    $(".showpic img").bind('click', function() {
        if (person == 0) {
            $(".showpic img").animate({ height: winHeight/3 }, {
                duration: 500,
                easing: 'linear',
                queue: false,
                step: function(now, fx) {
                    var picradius =(1-(now - 120)/(winHeight-120))*60;
                    $(".showpic img").css('height', now).css('width', now).css('border-radius',picradius+'px');
                },
            });
            person = 1;
        } else {
            person = 0;
            $(".showpic img").removeClass('person').animate({ height: 120 }, {
                duration: 500,
                easing: 'linear',
                queue: false,
                step: function(now, fx) {
                    var picradius =(1-(now - 120)/(winHeight-120))*60;
                    $(".showpic img").css('height', now).css('width', now).css('border-radius',picradius+'px');
                },
            });;
        }

    });
    // 作品切换
    $(".item").bind('touchstart', function(e) {
        itemwidth = e.originalEvent.changedTouches[0].screenX;
        newitem = itemcount + 1;
    });
    var itemcount = 0
    $(".item").bind('touchend', function(e) {
        var movewidth = e.originalEvent.changedTouches[0].screenX - itemwidth;
        var changewidth = winWidth / 12;
        var realwidth = Math.abs(movewidth);
        if (realwidth > changewidth) {
            if (movewidth > 0) {
                $(".item").eq(itemcount).css('display', 'none').css('long', '0').css('fontsize', '0').css('z-index', '1').css('transform', 'translateX(0) scale(0)');
                if (itemcount == 5) {
                    itemcount = 0;
                } else {
                    itemcount++;
                };
                $(".item").eq(itemcount).animate({ long: 1 }, {
                    duration: 500,
                    easing: 'linear',
                    queue: false,
                    step: function(now, fx) {
                        $(".item").eq(itemcount).css('display', 'block').css('transform', 'scale(' + now + ') translateX(0)')
                    }
                });
            } else if (movewidth < 0) {
                $(".item").eq(itemcount).css('display', 'none').css('long', '0').css('fontsize', '0').css('z-index', '1').css('transform', 'translateX(0) scale(0)');
                if (itemcount == 0) {
                    itemcount = 5;
                } else {
                    itemcount--;
                };
                $(".item").eq(itemcount).animate({ long: 1 }, {
                    duration: 500,
                    easing: 'linear',
                    queue: false,
                    step: function(now, fx) {
                        $(".item").eq(itemcount).css('display', 'block').css('transform', 'scale(' + now + ') translateX(0)')
                    }
                });
            }
        } else {
            $(".item").eq(itemcount).css('display', 'block').css('z-index', '1').css('transform', 'translateX(0)');
            $(".item").eq(newitem).css('display', 'none').css('transform', 'translateX(0) scale(0)');
        }
    });
    // 重点注意lang,fontsize在animation中的复用，即注意重置
    var newitem = 0
    $(".item").bind('touchmove', function(e) {
        var movewidth = e.originalEvent.changedTouches[0].screenX - itemwidth;
        var changewidth = winWidth / 12;
        var realwidth = Math.abs(movewidth);;
        var scale = 0;
        $(".item").eq(itemcount).animate({ fontsize: movewidth }, {
            duration: 100,
            easing: "linear",
            queue: false,
            step: function(now, fx) {
                if (movewidth > 0) {
                    newitem = itemcount + 1;
                } else if (movewidth < 0) {
                    newitem = itemcount - 1;
                };
                scale = Math.abs(now) / winWidth;
                $(".item").eq(itemcount).css('z-index', '9').css('transform', 'translateX(' + now + 'px)');

            }
        });
    });
})