$(document).ready(function() {
    let headerMenu = $('.header');
    let hideMenu = $('.hide-menu');
    let hideMenuNew = $('.hide-menu__new');
    let hideMenuBuy = $('.hide-menu__buy');

    $(window).scroll(function() {
        if ($(document).scrollTop() > 150) {
            headerMenu.addClass('position-fixed');
            headerMenu.addClass('header-scroll')
            hideMenu.addClass('menu-product__scroll');
            hideMenuNew.addClass('menu-scroll__new ');
            hideMenuBuy.addClass('menu-scroll__new ');
        } else {
            headerMenu.removeClass('position-fixed')
            hideMenu.removeClass('menu-product__scroll')
            hideMenuNew.removeClass('menu-scroll__new');
            hideMenuBuy.removeClass('menu-scroll__new');
        }

    })
})