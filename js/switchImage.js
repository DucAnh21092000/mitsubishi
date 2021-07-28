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
        url: "img1.jpg",
        link: ""
    },
    {
        url: "img2.jpg",
        link: ""
    },
    {
        url: "img3.jpg",
        link: ""
    },
    {
        url: "img4.jpg",
        link: ""
    },
    {
        url: "img5.jpg",
        link: ""
    }
]
var index = 0;
var image = document.querySelectorAll('.image-switch');
image[0].src = `../image/` + arrImage2[0].url;
image[1].src = `../image/` + arrImage2[1].url;
image[2].src = `../image/` + arrImage2[2].url;

// chuyển ảnh từ phải sang trái

function nextImage() {
    index++;
    if (index < 3) {
        image[0].src = `../image/` + arrImage2[index].url;
        image[1].src = `../image/` + arrImage2[index + 1].url;
        image[2].src = `../image/` + arrImage2[index + 2].url
    } else if (index == 3) {
        image[0].src = `../image/` + arrImage2[index].url;
        image[1].src = `../image/` + arrImage2[index + 1].url;
        image[2].src = `../image/` + arrImage2[0].url;
    } else if (index == 4) {
        image[0].src = `../image/` + arrImage2[index].url;
        image[1].src = `../image/` + arrImage2[0].url;
        image[2].src = `../image/` + arrImage2[1].url;
    } else {
        index = 0;
        image[0].src = `../image/` + arrImage2[0].url;
        image[1].src = `../image/` + arrImage2[1].url;
        image[2].src = `../image/` + arrImage2[2].url;
    }
}
var index2 = 0;
// chuyển ảnh từ trái sang phải
function preImage() {
    index2++;
    if (index2 > 1 && index2 < 4) {
        image[0].src = `../image/` + arrImage2[index2 - 1].url;
        image[1].src = `../image/` + arrImage2[index2].url;
        image[2].src = `../image/` + arrImage2[index2 + 1].url
    } else if (index2 == 0) {
        image[0].src = `../image/` + arrImage2[4].url;
        image[1].src = `../image/` + arrImage2[index2].url;
        image[2].src = `../image/` + arrImage2[index2 + 1].url;
    } else if (index2 == 1) {
        image[0].src = `../image/` + arrImage2[3].url;
        image[1].src = `../image/` + arrImage2[4].url;
        image[2].src = `../image/` + arrImage2[index2].url;
    } else {
        index2 = 0
        image[0].src = `../image/` + arrImage2[0].url;
        image[1].src = `../image/` + arrImage2[1].url;
        image[2].src = `../image/` + arrImage2[2].url;
    }
}