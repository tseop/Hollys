// PC GNB
function setGnb(){
    var gnbItem = $(".gnb-item");

    gnbItem.on("mouseover focusin", function () {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        $('header').addClass("show-sub")
    });
    gnbItem.on("mouseleave focusout", function () {
        $(this).removeClass("on");
        $('header').removeClass("show-sub")
    });
}

// MO 메뉴
function setAllMenu(){
    var btnOpen = $(".btn-menu-open"),
        btnClose = $('.btn-menu-close');

        btnOpen.on("click", function(){
            $(this).parent().next().addClass('open');
        });
        btnClose.on("click", function(){
            $(this).parent().removeClass('open');
        });

        // fold - 서브메뉴
        var btnFold = $(".menu-item > a");

        btnFold.on("click", function (){
            $(this).parent(".menu-item").toggleClass('active');
        });    
}

// TOP 버튼 이벤트
function setTop(){
    var btnTop = $(".floating-wrapper > .btn-go-top");

    btnTop.on("click",function(){
        $("html, body").animate({ scrollTop: 0 }, 300);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 100 ){
          $(".floating-wrapper").addClass("active");
        }
        else{
          $(".floating-wrapper").removeClass("active");
        }
    });
}

// Breadcrumb 드롭메뉴 버튼 이벤트
function setDropDown(){
    var btnOpen = $(".breadcrumb-item .btn-dropdown-menu");

    btnOpen.on("click",function(){
        $(this).parent().toggleClass("active");
    });
}

// 옵션 클릭 이벤트
function setSelectOption(){
    var btnSelect = $(".btn-select");
    var btnOption = $(".btn-option");

    btnSelect.on("click", function(){
        if($(this).closest('.select-box').hasClass('open')) {
		    $(this).closest('.select-box').removeClass('open').find('.option-list').slideUp(200);
	    } else {
		    $(this).parent().siblings('.select-box').removeClass('open').find('.option-list').slideUp(200);
		    $(this).closest('.select-box').addClass('open').find('.option-list').slideDown(200);
	    }
    });
    btnOption.on("click", function(){
        var bindText = $(this).html();
        $(this).closest('.select-box').find('.btn-select').html(bindText);
        $(this).closest('.select-box').removeClass('open').find('.option-list').slideUp(200);
    });

};

$(document).ready(function(){
    setGnb();
    setAllMenu();
    setTop();
    setDropDown();
    setSelectOption();
});