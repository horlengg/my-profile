const imageWrapper = document.querySelector('.image-wrapper');
const images = [ "developer_team.jpg","drama.jpg","developer_team2.jpg","best_friend.jpg","img_01.jpg","img_02.jpg","img_03.jpg"]
let currentImageIndex = 0 ;
displayImage(images[currentImageIndex]);
setInterval(()=>{
    createBackground() ;
},100) ;
setInterval(()=>{
    if(currentImageIndex === images.length - 1)
        currentImageIndex = 0;
    else
        currentImageIndex ++ ;
    displayImage(images[currentImageIndex]);
},5000) ;

function displayImage(path,title){
    const imageElement = document.createElement('img');
    imageElement.setAttribute('class','img');
    imageElement.src = `./image/${path}`
    imageWrapper.appendChild(imageElement) ;
    setTimeout(()=>{
        imageElement.classList.add('img-leave');
        setTimeout(()=>{
            imageElement.remove()
        },400)
    },4500) ;
}

function createBackground(){
    const spanElement = document.createElement("span");
    spanElement.classList.add("style-bg") ;
    spanElement.style.left = Math.random() *+ innerWidth + 'px';
    document.documentElement.appendChild(spanElement);
    setTimeout(()=>{
        spanElement.remove() ;
    },4000)
}