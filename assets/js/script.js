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


// callapi();
// remove this call if we do not want a joke to display when the page loads

// Notes from tutoring:
// var whatever = [];

// whatever.push("hello")
// console.log(whatever)

// 2nd api https://unsplash.com/collections/9396519/bears


const numImagesAvailable = 145   //how many photos are total in the collection
const numItemsToGenerate = 1; //how many photos you want to display
const imageWidth = 480;    //image width in pixels
const imageHeight = 480;   //image height in pixels
const collectionID = 9396519  //Bears, the collection ID from the original url
const galleryContainer = document.querySelector('#gallery-item')
function renderGalleryItem(randomNumber){
    fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`)
    .then((response) => {
        console.log(response)
        let galleryItem = document.createElement('img');
        galleryItem.setAttribute("src", `${response.url}`)
        document.body.append(galleryItem)
})
}
for(let i=0; i < numItemsToGenerate; i++){
    
}


buttonEl.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event)
    callapi();
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
renderGalleryItem(randomImageIndex);
});
