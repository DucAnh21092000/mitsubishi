        var imgScroll = $('.imgScrollTop');
        imgScroll.click(function() {
            $('html,body').animate({
                    scrollTop: '0'
                },
                1200
            )
        })
        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(document).scrollTop() > 400) {
                    imgScroll.removeClass("d-none");
                } else {
                    imgScroll.addClass("d-none");
                }

            })
        })