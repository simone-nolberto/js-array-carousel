const imgList = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp']
console.log(imgList);

let currentImg = 0;
console.log(currentImg);

const slides = document.querySelector('.slides');
console.log(slides);



for (let i = 0; i < imgList.length; i++) {
    const img = imgList[i];
    console.log(img);

    const slidesContent = `<img class="${i === currentImg ? 'active' : ''}" src="./assets/img/${img}" alt="">`;

    console.log(slidesContent);

    slides.insertAdjacentHTML('beforeend', slidesContent);
    console.log();


}

const prevBtn = document.querySelector('.prev');

const nextBtn = document.querySelector('.next');


prevBtn.addEventListener('click', function () {
    console.log("previous img");
    currentImg--;
    const activeImg = document.querySelector('img.active');
    console.log(activeImg);
    activeImg.classList.remove('active');

    const allImg = document.querySelectorAll('.slides img')

    allImg[currentImg].classList.add('active');

})


nextBtn.addEventListener('click', function () {
    console.log("next img");
    currentImg++;
    const activeImg = document.querySelector('img.active');
    console.log(activeImg);
    activeImg.classList.remove('active');

    const allImg = document.querySelectorAll('.slides img')

    allImg[currentImg].classList.add('active');
    console.log(allImg[currentImg]);


})