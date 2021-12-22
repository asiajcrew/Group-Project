var apiUrl = "https://api.humorapi.com/jokes/random?api-key=905745e1181e46198869ccbf66b4d0dd";
var displayEl = document.getElementById("display-joke");
var buttonEl = document.getElementById("new-joke");

function callapi() {
    fetch(apiUrl)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data)
    displayEl.textContent = data.joke;
    // "joke" in data.joke refers the joke line in the console log 
})
.catch(function(error) {
    console.log(error);
})
}

buttonEl.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event)
    callapi();
});

callapi();
// remove this call if we do not want a joke to display when the page loads





// Notes from tutoring:
// var whatever = [];

// whatever.push("hello")
// console.log(whatever)

// 2nd api https://placebear.com/g/200/300