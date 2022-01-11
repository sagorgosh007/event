let nav = document.querySelector('.navbar');
let menu = document.querySelector('#menu-bar');

menu.onclick =()=>{
    nav.classList.toggle('active');
    menu.classList.toggle('fa-times');
}


window.onscroll =()=>{
    nav.classList.remove('active');
    menu.classList.remove('fa-times');
}



let toggler = document.querySelector('.theme-toggler');

let toggleBtn = document.querySelector('.toggle-btn')

toggleBtn.onclick =()=>{
    toggler.classList.toggle('active');
}

window.onscroll =()=>{
  toggler.classList.remove('active');
}




document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{

  btn.onclick = (btn) =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty("--main-color", color);
  }

});
var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
      
    },

    loop:true,
    autoplay:{
        delay:400,
        disableOnInteraction:false,
        
    }
    
  });

  
var swiper = new Swiper(".review-slider", {
    slidesPerView:1,
    loop:true,
    grabCursor: true,
    spaceBetween:10,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
        1050:{
            slidesPerView:3,
        },
    },
    autoplay:{
        delay:500,
        disableOnInteraction:false,
    }
   


    
  });

