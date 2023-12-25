const formWrapper = document.querySelector("#form-wrapper")

const form = document.querySelector("#form")

const searchInput = document.querySelector("#search-input")

const buttonWrapper = document.querySelector(".button-wrapper")

const searchBtn = document.querySelector("#search-btn")

const clearBtn = document.querySelector("#clear-btn")

const imgList = document.querySelector("#img-list")

searchBtn.addEventListener("click", function(e){
    e.preventDefault()
    const value = searchInput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method: "GET",
        headers: {
            Authorization : "Client-ID PD-aEo0ccG2IK8WFALztm6IVlajHNfxb--3fmTfNEXc" 
        }
    })
    .then((res) => res.json())
    .then((data) => {
        imgList.innerHTML = "";
      Array.from(data.results).map((img)=> addImageToUI(img.urls.small))
    })
    .catch((err)=>console.log(err))


})

clearBtn.addEventListener("click", function(){
    imgList.remove();
})

function addImageToUI(url) {
    const div = document.createElement("div");
    div.classList.add("card")

    const img = document.createElement("img")
    img.src = url;
    img.height = "400"
    img.width = "400"

div.appendChild(img);
imgList.appendChild(div);
}