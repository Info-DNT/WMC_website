(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky / condensing navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('position-fixed navbar-scrolled');
        } else {
            $('.navbar').removeClass('position-fixed navbar-scrolled');
        }
    });


    // Mobile nav drawer: backdrop, body scroll-lock, Esc + link-tap to close
    var navCollapse = document.getElementById('navbarCollapse');
    if (navCollapse && window.bootstrap) {
        var navBackdrop = document.createElement('div');
        navBackdrop.className = 'navbar-backdrop';
        (document.querySelector('.navbar') || document.body).appendChild(navBackdrop);

        var closeNav = function () {
            if (navCollapse.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
            }
        };
        navCollapse.addEventListener('show.bs.collapse', function () {
            document.body.classList.add('nav-open');
        });
        navCollapse.addEventListener('hidden.bs.collapse', function () {
            document.body.classList.remove('nav-open');
        });
        navBackdrop.addEventListener('click', closeNav);
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') { closeNav(); }
        });
        navCollapse.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', closeNav);
        });
    }
    
    
    // Back to top & Floating WhatsApp buttons
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
            $('.floating-whatsapp').css('display', 'flex').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
            $('.floating-whatsapp').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel – smooth infinite left-to-right loop
    $(document).ready(function () {
        $(".testimonial-carousel").owlCarousel({
            loop: true,
            margin: 24,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplaySpeed: 1200,
            autoplayHoverPause: true,
            smartSpeed: 1200,
            responsive: {
                0:   { items: 1 },
                640: { items: 2 },
                992: { items: 2 }
            }
        });
    });

    
})(jQuery);

