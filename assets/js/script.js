var apiUrl = "https://api.humorapi.com/jokes/random?api-key=905745e1181e46198869ccbf66b4d0dd";
var displayEl = document.getElementById("display-joke");
var buttonEl = document.getElementById("new-joke");
var introJoke = document.getElementById("intro-joke")

var listItemEl = document.createElement("h4");
listItemEl.className = "initial-joke";
listItemEl.textContent = "What Do You Call A Bear With No Teeth? A Gummy Bear!";
introJoke.appendChild(listItemEl);



function callapi() {
    fetch(apiUrl)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    displayEl.textContent = data.joke;
    // "joke" in data.joke refers to the joke line in the console log 
})
.catch(function(error) {
    console.log(error);
})
}

const numImagesAvailable = 145   //how many photos are total in the collection
const numItemsToGenerate = 1; //how many photos you want to display
const imageWidth = 480;    //image width in pixels
const imageHeight = 480;   //image height in pixels
const collectionID = 9396519  //Bears, the collection ID from the original url
const galleryContainer = document.querySelector('#gallery-item')
function renderGalleryItem(randomNumber){
    fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`)
    .then(function(response) {
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
    listItemEl.remove();
    callapi();
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
renderGalleryItem(randomImageIndex);
});
// renderGalleryItem();