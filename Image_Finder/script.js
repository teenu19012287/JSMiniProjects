const accesskey = "7RGUhzFP2trkjQZecFezMUiiGldkucm-h8XXfu6CZYA"
const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResults =  document.querySelector(".search_images");
const showmore = document.getElementById("show-more-button");



let inputData = 0;
let page= 1;


async function searchImages()
{
   inputData =  inputE1.value;
   const url  = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
   const response  = await fetch(url);
   const data = await response.json();

   const results  = data.results;

   if(page === 1)
   {
    searchResults.innerHTML = "";
   }

   results.map((result)  => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search_img");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);

   });

   page++;
   if(page > 1)
   {
    showmore.style.display = "block";

   }

}

formE1.addEventListener("submit" , (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showmore.addEventListener("click" , () => {
    searchImages();

});