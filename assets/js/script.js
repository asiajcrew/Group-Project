var buttonEl = document.querySelector(".btn");

var apiUrl = "https://humorapi.com/docs/#Random-Joke"
var joke = fetch(apiUrl)
    .then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                display(data);
            });
        }
    });

var titleEl = document.createElement("span");
buttonEl.addEventListener("submit", fetch);









// 2nd api https://placebear.com/g/200/300