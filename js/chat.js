var iconChat = document.querySelector('.chat-icon');
var formChat = document.querySelector('.form-chat');
var hidenChat = document.querySelector('.hident-chat');
var closeChat = document.querySelector('.close-chat');
var chat = document.querySelector('.chat');
var userText = document.querySelector('.user-text');
var user2Text = document.querySelector('.user2-text');
var arrChat = [{
        "id": 1,
        "user_id": 2,
        "content": "hello",
        "user": " ...?",
        "time": "17:04"
    },
    {
        "id": 2,
        "user_id": 1,
        "content": "Tôi là Đức Anh",
        "user": "Đức Anh",
        "time": "17:04"
    },
    {
        "id": 2,
        "user_id": 1,
        "content": "Bạn cần trợ giúp gì không",
        "user": "Đức Anh",
        "time": "17:04"
    },
    {
        "id": 3,
        "user_id": 2,
        "content": "Tôi có bạn ơi dddddddd",
        "user": "...?",
        "time": "17:05"
    },
    {
        "id": 4,
        "user_id": 2,
        "content": "Bạn có thể trả lời cho tôi điều này được không",
        "user": "...?",
        "time": "17:04"
    },
    {
        "id": 4,
        "user_id": 2,
        "content": "Tôi muốn nói mới bạn là ....",
        "user": "...?",
        "time": "17:04"
    }
]
iconChat.onclick =
    function showFormChat() {
        formChat.style = `display : block`;
        iconChat.style = `display : none`;
    }
hidenChat.onclick = function() {
    iconChat.style = `display : block`;
    formChat.style = `display : none`;
}
closeChat.onclick = function() {
    chat.remove();
}
var message = document.querySelector('.message');
var p = document.createElement("p");

function getMesseage(user_id, content, arrchat) {
    arrchat = arrChat.forEach(function(arr) {
        if (arr.user_id == user_id) {
            var message = document.querySelector('.message');
            var p = document.createElement("p");
            var div = document.createElement("div");
            div.className = `d-flex flex-row justify-ccontent-start`;
            var avatar = document.createElement("btn");
            var linkAvatar = document.createTextNode('avtar1');
            avatar.appendChild(linkAvatar);
            avatar.className = `btn-user btn-circle `;
            var node = document.createTextNode(arr.content);
            p.appendChild(node);
            p.className = `user-text mt-1`;
            p.title = arr.time;
            var br = document.createElement("br");
            div.appendChild(avatar);
            div.appendChild(p);
            message.appendChild(div);

        } else {
            var message = document.querySelector('.message');
            var p = document.createElement("p");
            var div = document.createElement("div");
            div.className = `d-flex flex-row justify-content-end`;
            var avatar = document.createElement("button");
            avatar.className = `btn-primary btn-circle `;
            var linkAvatar = document.createTextNode('avatar2');
            avatar.appendChild(linkAvatar);
            var node = document.createTextNode(arr.content);
            p.appendChild(node);
            p.className = `user2-text mt-1`;
            p.title = arr.time;
            var br = document.createElement("br");
            div.appendChild(p);
            div.appendChild(avatar);
            message.appendChild(div);
        }
    })
}
getMesseage(1, arrChat);