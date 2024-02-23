const imgList = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp']
console.log(imgList);

let currentImg = 0;
console.log(currentImg);

const slides = document.querySelector('.slides');
console.log(slides);



for (let i = 0; i < imgList.length; i++) {
    const img = imgList[i];
    console.log(img);
    currentImg = img;
    console.log(currentImg);
    
    const slidesContent = `<img class=${ currentImg === 0  ? 'active': '' }"active" src="./assets/img/${img}" alt="">`;

    console.log(slidesContent);

 

}