$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause'))
            {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children('span').removeClass('fa-pause');
                $("#carouselButton").children('span').addClass('fa-play');
            }
         else {
               $("#mycarousel").carousel('cycle');
               $("#carouselButton").children('span').removeClass('fa-play');
               $("#carouselButton").children('span').addClass('fa-pause');
              }

      
    });
   
});

$(document).ready(function(){
    $("#reservebutton").click(function(){
    $("#testform").modal('show'); 
    });
    $("#closebutton").click(function(){
    $("#testform").modal('hide'); 
    });
    });
   


$(document).ready(function(){
    $("#testlogin").click(function(){
    $("#loginModal").modal('show'); 
    });
    $("#closelogin").click(function(){
    $("#loginModal").modal('hide'); 
    });

});
