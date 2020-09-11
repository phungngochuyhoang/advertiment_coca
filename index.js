$(
    $('.box-nav ul li:nth-child(1) a').click(() => {
        setTimeout(() => {
            $('.box-top').css({display: 'none'});
        }, 500);
    }),

    $('.box-nav ul li:nth-child(2) a').click(() => {
        $('.intro.intro-body p').animate({
            opacity: 1,
            left: 0
        }, 1000)
        $('body').css({overflow: 'sreen'})
    }),

    $('.box-nav ul li:nth-child(3) a').click(() => {
        $('.companion-body .body-text p').animate({
            opacity: 1,
        }, 1000)
        $('.companion-body .body-img .img').animate({
            opacity: 1,
        }, 1000)
    }),

    $('.box-nav ul li:nth-child(4) a').click(() => {
        $('.playHard-body .body-boxImg .item-box').animate({
            opacity: 1,
        }, 1000)
    }),


    $('.box-nav ul li:nth-child(6) a').click(() => {
        $('body').css({overflow: 'auto'})
    }),

    $(window).scroll((e) => {
        if(this.scrollY == 0) {
            $('.box-top').css({display: 'none'});
        }else {
            $('.box-top').css({display: 'block'});
        }
    }),

    $('.icon-bar').click(() => {
        $('.box-nav ul').toggle();
    })
)