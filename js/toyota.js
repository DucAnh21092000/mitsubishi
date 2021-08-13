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