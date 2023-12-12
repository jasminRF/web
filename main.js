$(function(){

    $(".primero").mouseenter(function(){

        $(".segundo").fadeOut();
        $(".tercero").fadeOut();
        $(".cuarto").fadeOut();
    })

    $(".primero").mouseleave(function(){
        $(".segundo").fadeIn();
        $(".tercero").fadeIn();
        $(".cuarto").fadeIn();

    })

    
    $(".two").mouseenter(function(){

        $(".one").fadeOut();
        $(".tree").fadeOut();
        $(".four").fadeOut();
    })

    
    $(".two").mouseenter(function(){

        $(".one").fadeIn();
        $(".tree").fadeIn();
        $(".four").fadeIn();
    })

    $(document).ready(function(){
        $("h4").on("click",function(){
        alert('Buen dia aqui te damos informacion de nosotros, donde estamos ubicados y nuestras redes sociales, Gracias. ');
        });
        });

        

      

      $(document).ready(function(){
              $(".tree").mouseover(function(){
              $(this).addClass("red");
              });
            });
             

                $(document).ready(function () {
                    $("#btn-hide").click(function () {
                        alert(" ya se ha realizado el envio");
                    });
                });
       $("#btn-hide").click(function(){
        $(".contenedor1").hide();
       });

       $(".segundo").mouseenter(function(){
            $(".tercero").slideDown();
       });
       $(".segundo").mouseenter(function(){
                $(".tercero").slideUp();

                $("p").on({
                    mouseenter: function(){
                      $(this).css("background-color", "grey");
                     }, 
                    mouseleave: function(){
                       $(this).css("background-color", "");
                    }, 
                    click: function(){
                      $(this).css("background-color", "red");
                    } 
                  }); 
       
    })



      

       
       

 })