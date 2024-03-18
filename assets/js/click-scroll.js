//jquery-click-scroll
//by syamsul'isul' Arifin

const links = Array.from(document.querySelectorAll('.navbar-nav a')).map(a => a.getAttribute("href"));


$.each(links, function(index, value){
          
     $(document).scroll(function(){

         var offsetSection = $(value).offset().top - 100;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
        
         if ( docScroll1 >= offsetSection ){
             $('.navbar-nav .nav-item .nav-link').removeClass('active');

             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');

         }
         
     });
    
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $(value).offset().top - 100;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
});


