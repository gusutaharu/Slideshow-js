'use strict'
{
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('main-img');
  const next = document.getElementById('next');
  let activeIndex = 0;

  thumbnails[0].addEventListener('click', ()=>{
    mainImage.src = thumbnails[0].src;
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
    thumbnails[0].classList.add('active');
  });

  thumbnails[1].addEventListener('click', ()=>{
    mainImage.src = thumbnails[1].src;
    thumbnails[0].classList.remove('active');
    thumbnails[2].classList.remove('active');
    thumbnails[1].classList.add('active');
  });

  thumbnails[2].addEventListener('click', ()=>{
    mainImage.src = thumbnails[2].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.add('active');
  });

  next.addEventListener('click',()=>{
    activeIndex++;
    if (activeIndex >2){
      activeIndex = 0;
    }
    mainImage.src = thumbnails[activeIndex].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
    thumbnails[activeIndex].classList.add('active');
  })
}