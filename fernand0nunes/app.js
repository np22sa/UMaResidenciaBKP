//navbar motion
const navSlide =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click', () =>{
        //toggle Nav
        nav.classList.toggle('nav-active');  

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
            link.style.animation = ''; 
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.3}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toogle');
    });
}
navSlide();
//scroll image
$(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    $('section').css({
        'background-position-x': - scroll_position + 'px',
    })
})
//background navbar
$(window).on('scroll', function(){
    if ($(window).scrollTop()){
         $('nav').addClass('black');
    }
    else 
    {
        $('nav').removeClass('black');
    }
})


