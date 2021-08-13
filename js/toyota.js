(function() {
    let featureListSafe = $('.feature-list__safes')
    let featureListOperate = $('.feature-list__operates')
    let btnOperate = $('.btn-operate')
    let btnSafe = $('.btn-safe')
    btnOperate.click(function() {
        featureListSafe.hide()
        featureListOperate.show()
    })
    btnSafe.click(function() {
        featureListSafe.show()
        featureListOperate.hide()
    })
}())

!(function() {
    let header = $('.header')
    let menuInfo = $('.menu-info')
    $(window).scroll(function() {
        if (($('html,body').scrollTop()) > 393) {
            header.hide()
            menuInfo.addClass('position-fixed')
            menuInfo.css({
                top: 0,
                right: 0,
                left: 0
            })
        } else {
            header.show()
            menuInfo.removeClass("position-fixed")
        }
    })

}());