'use strict'
{
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('main-img');

  thumbnails[1].addEventListener('click', ()=>{
    mainImage.src = thumbnails[1].src;
  });
}