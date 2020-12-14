
  $(document).ready(function(){
     $(window).scroll(function(){
  var scroll_highet=$(this).scrollTop();
  if(scroll_highet >=685)
  {
    $('.navbar').addClass('fixed-top');
  }
    else
    {
      $('.navbar').removeClass('fixed-top');
    }
  
   });
 
     $('.nav-item a').click(function(link)
     {
      link.preventDefault();
      let target = $(this).attr('href');
      $('html, body').animate({
        scrollTop:$(target).offset().top - 25
      },1000);
     }); 

















   $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery: {
      // options for gallery
      enabled: true,
    }
  });


  });
 