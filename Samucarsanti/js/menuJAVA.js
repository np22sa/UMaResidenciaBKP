$(document).ready(main);

var contador = 1;

function main() {
    $('.logomenuresponsive').click(function () {
        // $('nav').toggle(); 

        if (contador == 1) {
            $('.containermenuresponsive').animate({
                left: '0%'
                //transform: translateX(-2)
            });
            contador = 0;
        } else {
            contador = 1;
            $('.containermenuresponsive').animate({
                left: '-900%'
                //transform: translateX(-110)
            });
        }

    });

};