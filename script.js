$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass('sticky')
      $('.navbar .max-width .logo a .port').addClass('sticky')
    }else{
      $('.navbar').removeClass('sticky')
      $('.navbar .max-width .logo a .port').removeClass('sticky')
    }
  })

  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass('active')
    $('.menu-btn i').toggleClass('active')

  });

  let typed  = new Typed(".typing", {
    strings:['Software Developer', 'Web Developer', 'Tech-Motivated'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
  })

   $('.carousel').owlCarousel({
     margin:20,
     loop:true,
     autoplayTimeOut:2000,
     autoplayHoverPause:true,
     responsive:{
       0:{
         items:1,
         nav:false
       },
       600:{
        items:2,
        nav:false
      },
      1000:{
        items:3  ,
        nav:false
      }
     }

   });
})