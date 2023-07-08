/*
	Assignment 2 | COMP1073 Client-Side JavaScript
	MAX MARTENS 200495725
	KIEREN HUSSEY 200409682

*/

const displayedImage = document.getElementById("bigPicture"); //the 'featured' (selected) image
const ul = document.getElementById("thumbnails"); //the thumbnail image ul
const thumbnailImages = ul.getElementsByClassName("thumbnail"); //the thumbnail images
const caption = document.querySelector("figcaption"); //figcaption
const random = document.getElementById('random'); //button

//Function for setting the main/featured image in the gallery
function mainImage(source) {
  displayedImage.setAttribute("src", source);
}

//Changing the featured image
ul.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName === "IMG") {
    let imageName = e.target.getAttribute("src"); //getting the source of the thumbnail
    imageName = imageName.toString().replace("small", "large"); //changing it to the full-sized version of the picture
    mainImage(imageName); //passing the string to the function to feature the selected image
    caption.innerHTML = e.target.alt; //updating the caption
  }
})

// Adding dynamism to the image gallery //
// Array of images with interesting info
const images = [
  {
    src: "images/flowers-pink-small.jpg",
    caption: "Beautiful arrangement of pink flowers",
  },
  {
    src: "images/flowers-purple-small.jpg",
    caption: "Purple flowers in a grassy field",
  },
  {
    src: "images/flowers-red-small.jpg",
    caption: "Poppy flowers to remember the brave soldiers",
  },
  {
    src: "images/flowers-white-small.jpg",
    caption: "Snowdrop flowers in the natures garden",
  },
  {
    src: "images/flowers-yellow-small.jpg",
    caption: "Sunflowers blooming in the summer sun",
  },
  //Keep adding images below this line to add more//
];

// creating loop to iterate through the images array
for (let i = 0; i < images.length; i++) {
  let image = images[i];

  // creating li element to hold the li elements
  let li = document.createElement("li");

  // creating img element to hold the imag element and its attributes
  let img = document.createElement("img");
  img.src = image.src;
  img.alt = image.caption; //setting the alt descriptor for added images

  // thumbnail class to the img element
  img.classList.add("thumbnail");

  // appending the img element to the li element
  li.appendChild(img);

  // appending the li element to the ul element
  ul.appendChild(li);
}

// other functions and image effects //
// setting the grayscale effect for thumbnails when clicking through gallery//
ul.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
     // removing active class from all thumbnail images
    removeActive();
    // applying active class to the clicked image
    e.target.classList.add("active");
  }
})

//selecting a random image to view
random.addEventListener("click", function (){
  let i = [Math.floor(Math.random() * images.length)] //generating the random image index
  imageName = images[i].src; //selecting a random image from array
  imageName = imageName.toString().replace("small", "large");
  mainImage(imageName);
  caption.innerHTML = images[i].caption; //updating caption
  removeActive();
  thumbnailImages[i].classList.add("active");
})

// removes active class from all thumbnail images, used for grayscale effect
function removeActive(){
  for (var j = 0; j < thumbnailImages.length; j++) {
   thumbnailImages[j].classList.remove("active");
 }
}

//initial settings

thumbnailImages[0].classList.add("active");
caption.innerHTML = images[0].caption; 
