$(document).ready(main);

var contador = 1;

function main() {
    $('.menu-div_slide').click(function () {
        // $('nav').toggle(); 

        if (contador == 1) {
            $('.linguas').animate({
                left: '85%'
            });
            contador = 0;
        } else {
            contador = 1;
            $('.linguas').animate({
                left: '100%'
            });
        }

    });

};