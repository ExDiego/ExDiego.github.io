
//Cuando se hace clic en ese botón, se muestra una alerta con el mensaje "Su mensaje fue enviado correctamente.".
$("#enviarCorreo").click(function(){
    alert("Su mensaje fue enviado correctamente.")
});


//Oculta el parrafo de las cards 1, 2, 3 y 4, con un click en el titulo

$( "#cardtitle1").on( "click", function(){
    $("#cardtext1").toggle("slow", function(){
    } )
});

$( "#cardtitle2").on( "click", function(){
    $("#cardtext2").toggle("slow", function(){
    } )
});

$( "#cardtitle3").on( "click", function(){
    $("#cardtext3").toggle("slow", function(){
    } )
});

$( "#cardtitle4").on( "click", function(){
    $("#cardtext4").toggle("slow", function(){
    } )
});


// Smooth scroll para navegar fluidamente por la pagina
$(document).ready(function(){
    
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });
});