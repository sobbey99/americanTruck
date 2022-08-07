$('.firstscreen__wallpapers').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true
});


let header = document.querySelector('.header');
    logo = document.querySelector('.firstscreen__logo');
    telo = document.querySelector('body');


    //make the header 50px
window.onscroll = function (e) {
    console.log(window.scrollY); // Value of scroll Y in px
    if (window.scrollY == 100)  {
        header.classList.add('header_moved');
        console.log("Am trecut o sotka brat");
    }   else if (window.scrollY < 100) {
        header.classList.remove('header_moved');
    }
};

    //delete the logo If it is INDEX.HTML
    if (telo.classList.contains('index')) {
        window.onscroll = function (e) {
            console.log(window.scrollY); // Value of scroll Y in px
            if (window.scrollY == 100)  {
                logo.classList.add('firstscreen__logo_none');
        header.classList.add('header_moved');
            }   else if (window.scrollY < 100) {
                logo.classList.remove('firstscreen__logo_none');
        header.classList.remove('header_moved');
            }
        };
    }   else {
        console.log("NOT INDEX HTML");

    }