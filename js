// LIGHTBOX

const galleryImages =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.createElement("div");

lightbox.classList.add("lightbox");

document.body.appendChild(lightbox);

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.style.display="flex";

        const img =
        document.createElement("img");

        img.src=image.src;

        lightbox.innerHTML="";

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

// ANIMASI SCROLL

window.addEventListener("scroll",()=>{

    const navbar =
    document.querySelector("nav");

    if(window.scrollY > 50){

        navbar.style.background =
        "#3D441E";

    }

    else{

        navbar.style.background =
        "rgba(61,68,30,.95)";
    }

});
