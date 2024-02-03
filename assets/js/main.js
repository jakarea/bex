    //owl carousel slider added into html
    $(document).ready(function(){
        $(".carousel").owlCarousel({
            margin: 20,
            loop: true,
            dots:true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
              0:{
                items:1,
                nav: false
              },
              600:{
                items:2,
                nav: false,
                center: true
              },
              1000:{
                items:3,
                nav: false
              }
            }
          });
      });