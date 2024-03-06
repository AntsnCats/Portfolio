const apiElement = document.getElementById("apiThing");
const api = "https://api.quotable.io/random"
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const maxImages = 3;
let currentImage = 1;


async function getQuote(){
    const data = await fetch(api)
    const quote = await data.json()
    apiElement.innerHTML = "<p>"+quote.content+"</p><cite>"+quote.author+"</cite>";
}

getQuote()

function updateSlideShow(){
    currentImage++

    if(currentImage > maxImages){
        currentImage = 1;
    }

    switch(currentImage){
        case 1:
            img1.classList.remove("hide")
            img2.classList.add("hide")
            img3.classList.add("hide")
            break;
        case 2:
            img1.classList.add("hide")
            img2.classList.remove("hide")
            img3.classList.add("hide")
            break;
        case 3:
            img1.classList.add("hide")
            img2.classList.add("hide")
            img3.classList.remove("hide")
            break;
        default:

            break;
    }
}

setInterval(updateSlideShow, 5000)





