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
//switch image
var arrImage = [{
        "url ": "1. jpg ",
        link: "abcd"
    },
    {
        url: "2.jpg",
        link: "abcd"
    }, {
        url: "3.png",
        link: "abcd"
    },
    {
        url: "4.jpg",
        link: "abcd"
    }
]
var img = document.querySelector('.img-slide');
img.src = `../image/` + arrImage[0].url;
var current = 0;

function switchImage() {
    current++;
    img.src = `../image/` + arrImage[current].url;
    if (current < 3) {
        setTimeout("switchImage()", 3000)
    } else {
        current = 0;
        setTimeout("switchImage()", 3000)
    }
}
switchImage()

var arrImage2 = [{
        url: "1-1-1536x1152.jpg",
        link: ""
    },
    {
        url: "2-1-1536x1152.jpg",
        link: ""
    },
    {
        url: "7-1-1536x1152.jpg",
        link: ""
    },
    {
        url: "9-1536x1152.jpg",
        link: ""
    },
    {
        url: "10-1536x1152.jpg",
        link: ""
    }
]
var index = 0;

function nextImage() {
    let image = document.querySelectorAll('.image-switch');
    image[index].src = `../image/` + arrImage2[index].url;
    image[index + 1].src = `../image/` + arrImage2[index].url;
    image[index + 2].src = `../image/` + arrImage2[index].url;
    if (index < 3) {
        index++;
        nextImage();
    } else {
        index = 0;
        nextImage()
    }

}