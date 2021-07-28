(
    function() {
        let headerItem = document.querySelector('.header-menu__item:nth-child(2)');
        let hideMenu = document.querySelector('.hide-menu')
        headerItem.onmouseover = function() {
            hideMenu.style = `display:block`;
            headerItem.onmouseout = function(e) {
                e.preventDefault();
            }
            hideMenu.onmouseover = function() {
                hideMenu.style = `display:block`;
            }
            hideMenu.onmouseout = function() {
                hideMenu.style = `display:none`;
            }
        }
    }
)();