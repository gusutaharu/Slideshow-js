'use strict'
{
  const main = document.getElementById('main');
  const thumbnails = document.querySelectorAll('.thumb');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let currentIndex = 0;

  thumbnails.forEach((thumb)=>{
    thumb.addEventListener('click', ()=>{
      thumbnails.forEach((el)=>{
        el.classList.remove('active');
      });
      main.src = thumb.src
      thumb.classList.add('active');
    });
  });

  prev.addEventListener('click',()=>{
    for(let i=0; i < thumbnails.length; i++){
      if(thumbnails[i].classList.contains('active') === true){
        currentIndex = i;
        thumbnails[i].classList.remove('active');
        if(currentIndex ===0){
          currentIndex = thumbnails.length-1;
        }else{
          currentIndex--;
        }
      }
    }
    main.src = thumbnails[currentIndex].src;
    thumbnails[currentIndex].classList.add('active');
  });

  next.addEventListener('click', ()=>{
    for(let i=0; i < thumbnails.length; i++){
      if(thumbnails[i].classList.contains('active')){
        currentIndex = i;
        thumbnails[i].classList.remove('active');
        if(currentIndex === thumbnails.length -1){
          currentIndex = 0;
        }else{
          currentIndex++;
        }
      }
    }
    main.src = thumbnails[currentIndex].src;
    thumbnails[currentIndex].classList.add('active');
  });
}