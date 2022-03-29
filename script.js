const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const cover = document.querySelector('.dark-cover');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Toggle Cover
        cover.classList.toggle('cover-active');
        
        //Removing Scrolling
        body.classList.toggle('disable-scroll');
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');

    });

}

navSlide();

jQuery(function(){
    $('.dark-cover').click(function(){
        $('.burger').trigger('click');
    });
});

$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 30) {
        $('nav').addClass('change-color');
        $('.title a, .nav-links a').addClass('change-color-text');
        $('.burger div').addClass('change-color-burger');
    } else {
        $('nav').removeClass('change-color');
        $('.title a, .nav-links a').removeClass('change-color-text');
        $('.burger div').removeClass('change-color-burger');
    }
});

function submited() {
    alert('Your question has been submited!');
}