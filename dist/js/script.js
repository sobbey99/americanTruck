$('.firstscreen__wallpapers').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true
});


let header = document.querySelector('.header');
    logo = document.querySelector('.firstscreen__logo');
    telo = document.querySelector('body');

   

window.addEventListener('scroll', function() { // Value of scroll Y in px
    console.log(document.documentElement.scrollTop);
    if (window.scrollY >= 100)  {
        header.classList.add('header_moved');
        
    }   else if (window.scrollY < 100) {
        header.classList.remove('header_moved');
    }
});

function removeLogo() {
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 100)  {
            logo.classList.add('firstscreen__logo_none');
    header.classList.add('header_moved');
        } else if (window.scrollY < 100) {
            logo.classList.remove('firstscreen__logo_none');
            header.classList.remove('header_moved');
        }
    });
}

 //delete the logo If it is INDEX.HTML
 if (telo.classList.contains('index')) {
    removeLogo();
}   else {
    console.log("NOT INDEX HTML");
}

let hamburger = document.querySelector('.header-phone__hamburger'),
    phoneMenu = document.querySelector('.header-phone__menu'),
    closeMenu = document.querySelector('.header-phone__close');

hamburger.addEventListener('click', function() {
    console.log('click');
    phoneMenu.classList.add('header-phone__menu_active');
});

closeMenu.addEventListener('click', function() {
    phoneMenu.classList.remove('header-phone__menu_active');
});