$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });


    //Button Clicks
    $("#icon-1").click(function () {
        window.open("https://www.linkedin.com/in/abdelrahman-ehab-71b38615a", '_blank').focus();
    });
    $("#icon-2").click(function () {
        window.open("https://github.com/AbdelrahmanEhab20", '_blank').focus();
    });
    $("#icon-3").click(function () {
        window.open("https://www.facebook.com/profile.php?id=100007045429343", '_blank').focus();
    });
    $("#icon-4").click(function () {
        window.open("https://wa.me/0201116685662", '_blank').focus();
    });
});