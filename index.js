$(
    $('.img__logo').click(() => {
        $('.page__intro').animate({
            width: 100 + '%',
            opacity: 1
        }, 800)
        $('.page__intro').show()
        $('.page__intro--back').show()
        setTimeout(() => {
            $('.page__intro--content').show()
            $('.page__intro--content').animate({
                opacity: 1
            })
        }, 900)
    }),
    $('.page__intro--back').click(() => {
        $('.page__intro').animate({
            width: 0,
            opacity: 0
        }, 800)
        setTimeout(() => {
            $('.page__intro').hide()
            $('.page__intro--back').hide()
        }, 700)
        setTimeout(() => {
            $('.page__intro--content').hide()
            $('.page__intro--content').animate({
                opacity: 0
            })
        }, 0)
    }),
    //--------------------------------------
    $('.img__3d').click(() => {
        $('.page__product').animate({
            width: 100 + '%'
        }, 800)
        $('.page__product').show()
        $('.page__product--back').show()
    }),
    $('.page__product--back').click(() => {
        $('.page__product').animate({
            width: 0
        }, 800)
        setTimeout(() => {
            $('.page__product').hide()
            $('.page__product--back').hide()
        }, 700)
    }),
)

function sendImg(url) {
    var main = document.getElementsByClassName('main-img')[0];
    main.children[0].src= url;
}