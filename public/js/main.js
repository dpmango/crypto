$(document).ready(function () {

  	$('[href="#"]').click(function(e) {
  		e.preventDefault();
  	});

    $('.left_side ul  a').removeClass('active');
    $('.left_side ul  a').each(function() {
        if($(this).attr('href') == location.pathname.slice(1)) {
            $(this).addClass('active');
        }
    })

    $('.header_dropdown').click(function () {
        $(this).find('ul').slideToggle();
        $(this).find('i').toggleClass('top');
    });

    $('.mobile').click(function () {
        $(this).next().slideToggle();
        $(this).find('i').toggleClass('top');
    });

    $('.mobile_btn button').click(function () {
        var blocks = $('.left-block, .right-block, .left_side, .right_side');
        blocks.slideToggle();
        $(this).find('.js-hamburger').toggleClass('is-active');
    });

    $('.dropdown_block').click(function () {
        $(this).toggleClass('opened');
        $(this).find('.dropdown_content').slideToggle();
    });

    $(document).on('click', '.change_input button', function (e) {
        e.preventDefault();

        var input = $(this).parent().parent().find('input'),
            val = input.val(),
            newVal = +val.replace(/[^0-9]/g, ''),
            newSufix = val.replace(/[0-9]/g, '');

        if ($(this).hasClass('plus')) {
            input.val(newVal + 1 + newSufix);
        } else {
            if (newVal - 1 < 0) {
                input.val(0 + newSufix);
            } else {
                input.val(newVal - 1 + newSufix);
            }
        }
    });

    $('.rest_api_info .nav a').click(function (e) {
        e.preventDefault();
        var id  = $(this).attr('href');
        var top = $('.nav_content').offset().top - 120;

        $('.nav_content > div').removeClass('active').fadeOut(0);
        $(id).fadeIn(500);

        $('.rest_api_info .nav li').removeClass('active');
        $(this).parent().addClass('active');

        $('body').animate({scrollTop: top}, 500);

    });

    $('.rest_api_info .mobile_tabs').click(function() {
        $(this).next().slideToggle();
        $(this).find('i').toggleClass('top');

    })

    $('.module_tab a').click(function (e) {
        e.preventDefault();
        $(this).parent().parent().find('a').removeClass('active');
        $(this).addClass('active');

        var id = $(this).attr('href');
        $(this).closest('.module').find('.module_tab_content > div').removeClass('active');
        $(id).addClass('active');

    });

    $('.tabs_chart a').click(function(e) {
        e.preventDefault();

        var text = $(this).text();
        $('.graph .mobile span').text(text);
    });


    $('.buy_orders .more, .sell_orders .more').click(function() {
        var table = $(this).prev().find('.hide_table');
        table.slideToggle();
        $(this).toggleClass('active');
    });


    $('#sign-in [type="submit"]').click(function (e) {
        e.preventDefault();
        location = '/index.html';
    });

    $('#sign-up [type="submit"]').click(function (e) {
        e.preventDefault();
        location = 'set_account.html';
    });

    $('#set_account [type="submit"]').click(function (e) {
        e.preventDefault();
        location = 'index_with_key.html';
    });



    $('.warning_btn').click(function () {openModal('#warning_modal')});
    $('.receive_btn').click(function () {openModal('#receive_modal')});
    $('.deposit_btn').click(function () {openModal('#deposit_modal')});

    function openModal(modal) {
        $(modal).addClass('open');
        $('header, .page_wrap').addClass('blur');
        $('body').addClass('open_modal');
    }


    $('.close_modal').click(function () {
        var parent  = $(this).parent();
        parent
               .removeClass('open')
               .addClass('close')
               .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                   parent.removeClass('close');
        });

        setTimeout(function(){
            $('header, .page_wrap').removeClass('blur');
            $('body').removeClass('open_modal');
        }, 200);
    });


    $('.exchanges .more_orders').click(function(e) {
        e.preventDefault();
        var block = $(this).parent().next().next();
        block.slideToggle();
        $(this).toggleClass('active');

    });

    $('.email input, .password input').on('focus', function() {
       $(this).parent().addClass('focus');
    });

    $('.email input, .password input').on('blur',  function() {
        $(this).parent().removeClass('focus');
    });

});
