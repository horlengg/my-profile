const imageWrapper = document.querySelector('.image-wrapper');
const imageTitle = document.querySelector(".img-title");
const images = [
    {imgTitle:"developer_team.jpg",title:"Traning Program នៅធានាគាអេភីឌី(APD bank)!"},
    {imgTitle:"drama.jpg",title:"ដឺងថាគេថតហើយទៀបប្រឺងសំដែង"},
    {imgTitle:"developer_team2.jpg",title:"មិត្តរួមការងារនៅធានាគាអេភីឌី(APD bank)!."},
    {imgTitle:"best_friend.jpg",title:"មិត្តភក្តិ​ មិត្តរួមបាយវត្ត​ មិត្តធ្លាប់ផ្លស់របងសាលា មិត្តធ្លាប់គ្រូមិនឲចូលរៀនព្រោះបាយបាន!."},
    {imgTitle:"img_01.jpg",title:"រៀនមិនប្រឺងទេប្រឺងតែសាកថ្មរជីវិតមួយថ្ងៃៗ!"},
    {imgTitle:"img_02.jpg",title:"គេគ្រប់គ្នាទៅប្រលងយប់ឡើងគេមើលសៀវភៅ ឯងវិញល្ងាចដើរលេងព្រឺកឡើងឈឺប៊ឹសអត់បានប្រលង!"},
    {imgTitle:"img_03.jpg",title:"ពេលមកដល់សាលាដំបូងសន្យានឹងខ្លួនឯងថានឺងខំរៀន Hack!"},
];
let currentImageIndex = 0 ;
displayImage(images[currentImageIndex].imgTitle,images[currentImageIndex].title);
setInterval(()=>{
    createBackground() ;
},100) ;
setInterval(()=>{
    if(currentImageIndex === images.length - 1)
        currentImageIndex = 0;
    else
        currentImageIndex ++ ;
    displayImage(images[currentImageIndex].imgTitle,images[currentImageIndex].title);
},5000) ;

function displayImage(path,title){
    const imageElement = document.createElement('img');
    imageTitle.textContent = title ;
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