var unilik = {
    init: function () {
        this.mt();
        this.mainNav();
        this.mainMenuStickyNav();
        this.sideMenuToggle();
        this.footerTitleToggle();
        this.phoneMask();
        // this.phoneInt();
        this.mainSlider();
        this.starRating();
        this.accord();
        this.testimonialSlider();
        this.doctorsSlider();
        this.doctorsMainSlider();
        this.profSlider();
        this.countersSlider();
        this.revealProf();
        this.defaultFormMeta();
        this.popupOrder();
        // this.backToTop();
        this.counter();
        this.mapLoad();
    },
    vars: {
        scrollTop: $(window).scrollTop(),
    },
    mt: function() {
        $('.wrapper').css('margin-top', $('.site-header-top').height() + $('.site-header-bot').height());
    },
    mainNav: function () {
        var $menu = $( '.site-menu' );
        var $menuButton = $( '.menu-toggle' );
        $menuButton.on( 'click', function() {
            $menu.toggleClass( 'active' ).slideToggle();
            $( this ).toggleClass('active');
            $( 'html, body' ).toggleClass('is-menu-open');
        });

        if (window.matchMedia("screen and (max-width: 992px)").matches) {
            $('.main-menu').on('click', '.sub-menu__toggle', function (event) {
                var $this = $(this);
                subMenuToggle(event, $this);
            });
        }
        function subMenuToggle(event, $this) {
            event.preventDefault();
            event.stopPropagation();
            if ($this.hasClass('is-open')) {
                $this.removeClass('is-open');
                $this.next('.sub-menu').removeClass('is-open').slideUp();
            } else {
                $this.closest('.menu-item').parent().find('.sub-menu__toggle.is-open').removeClass('is-open');
                $this.closest('.menu-item').parent().find('.sub-menu.is-open').removeClass('is-open').slideUp();
                $this.addClass('is-open');
                $this.next('.sub-menu').addClass('is-open').slideDown();
            }
        }

        $(document).on('click', '.no-link>a', function(event) {
            event.preventDefault();
        })
    },
    sideMenuToggle: function() {
        $(".side-menu-toggle").on("click", function () {
            $(this).toggleClass('is-show');
            $('.sidebar-menu-nav').toggleClass('is-open').slideToggle();
        });
    },
    footerTitleToggle: function() {
        if (window.matchMedia("screen and (max-width: 767.98px)").matches) {
            $(".footer-title").on("click", function () {
                if (!$(this).hasClass('active')) {
                    console.log('no');
                    $(".footer-col").slideUp('fast').removeClass('active');
                    $(".footer-title").removeClass('active');
                    $(this).addClass('active');
                    $(this).next().slideDown('fast').addClass('active');
                } else {
                    console.log('yes');
                    $(".footer-col").slideUp('fast').removeClass('active');
                    $(".footer-title").removeClass('active');
                }
            });
        }
    },
    mainMenuStickyNav: function() {
        var body = document.body,
        scrollUp = "scroll-up",
        scrollDown = "scroll-down",
        lastScroll = 0;
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll == 0) {
                body.classList.remove(scrollUp);
                return;
            }

            if (currentScroll > lastScroll && currentScroll > 50 && !body.classList.contains(scrollDown)) {
                // down
                body.classList.remove(scrollUp);
                body.classList.add(scrollDown);
            } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
                // up
                body.classList.remove(scrollDown);
                body.classList.add(scrollUp);
            }
            lastScroll = currentScroll;
        });
    },
    phoneMask: function () {
        $('input[type="tel"]').mask('+380 99 999-99-99');
    },
    // phoneInt: function() {
    //     var input = $('input[name="tel"]');
    //     input.each(function(index){
    //         window.intlTelInput(this, {
    //             onlyCountries: ["ua","ru"],
    //             initialCountry: "ua",
    //             // autoPlaceholder: true
    //         });
    //     });
    // },
    mainSlider: function () {
        if ($('.main-slider-items').length>0) {
            $('.main-slider-items').slick({
                lazyLoad: 'ondemand',
                autoplay: true,
                autoplaySpeed: 5000,
                infinite: true,
                arrows: false,
                dots: true,
                slidesToScroll: 1,
                adaptiveHeight: true
            });
        }
    },
    starRating: function () {
        $(".cf7-star-rating a").hover(function() {
            var id = $(this).data("id");
            var icon = $(this).closest('.cf7-star-rating').data("hover");
            for (i = 1; i <= id; i++) {
                $(this).closest('.cf7-star-rating').find('.cf7-star-rating-'+i +' i').removeClass().addClass(icon);
            }
        }, function() {
            var id_active = $(this).closest('.cf7-star-rating').data("active") + 1;
            var id = $(this).data("id");
            var icon = $(this).closest('.cf7-star-rating').data("icon");
            $(this).closest('.cf7-star-rating').find('i').removeClass().addClass(icon);
        });

        $(".cf7-star-rating").hover(function() {
        }, function() {
            var id_active = $(this).data("active");
            var icon_active = $(this).data("hover");
            for (i = 1; i <= id_active; i++) {
                $(this).find('.cf7-star-rating-'+i +' i').removeClass().addClass(icon_active);
            }
        });
        $(".cf7-star-rating a").click(function(event) {
            /* Act on the event */
            event.preventDefault();
            var id = $(this).data("id");
            var name = $(this).closest('.cf7-star-rating').data("name");
            $(this).closest('.cf7-star-rating').data("active",id);
            $('input[name='+name+']').val(id);
            var icon = $(this).closest('.cf7-star-rating').data("hover");
            for (i = 1; i <= id; i++) {
                $(this).closest('.cf7-star-rating').find('.cf7-star-rating-'+i +' i').removeClass().addClass(icon);
            }
        });
    },
    backToTop: function () {
        $('body').append('<button class="back-top" type="button"><i class="far fa-long-arrow-up"></i><span class="visually-hidden">Вверх</span></button>');
        $('.back-top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
            return false;
        });
    },
    backToTopScroll: function () {
        if ($(window).scrollTop() > 500) {
            $('.back-top').fadeIn(800);
        } else {
            $('.back-top').fadeOut(800);
        }
    },
    accord: function () {
        var $accordParent;
        $('.accord').addClass('open-first');
        if ($('.accord').hasClass('open-first')) {
            $('.accord.open-first>li:first-child>div').addClass('active');
            $('.accord.open-first>li:first-child>.accord-content').css('display','block');
        }
        $('.accord-title').on('click', function (e) {
            var $accordParent = $(this).closest('.accord');
            if (!$(this).hasClass('active')) {
                $accordParent.find('.accord-content').slideUp('fast').removeClass('active');
                $accordParent.find('.accord-title').removeClass('active');
                $(this).addClass('active');
                $(this).next().slideDown('fast').addClass('active');
                $accordParent.removeClass('open-first');
            } else {
                $accordParent.find('.accord-content').slideUp('fast').removeClass('active');
                $(this).removeClass('active');
            }
        });
    },
    testimonialSlider: function () {
        if ($('.testimonial-slider').length > 0) {
            var $prevArrow = '<button class="slick-prev slick-arrow" aria-label="Prev" type="button"><i class="far fa-angle-left"></i><span class="visually-hidden">Previous</span> <span class="hexagon"></span></button>';
            var $nextArrow = '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="far fa-angle-right"></i><span class="hexagon"></span></button>';
            var testimonialSlider = $('.testimonial-slider');

            testimonialSlider.slick({
                autoplay: false,
                autoplaySpeed: 3000,
                infinite: false,
                arrows: true,
                dots: false,
                fade: false,
                prevArrow: $prevArrow,
                nextArrow: $nextArrow,
                adaptiveHeight: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
    },
    doctorsMainSlider: function () {
        $this = this;
        if ($('.doctors-main-slider .card').length > 3) {
            var doctorsMainSlider = $('.doctors-main-slider');

            doctorsMainSlider.slick({
                autoplay: false,
                autoplaySpeed: 3000,
                infinite: false,
                arrows: false,
                dots: true,
                fade: false,
                // prevArrow: $prevArrow,
                // nextArrow: $nextArrow,
                adaptiveHeight: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 478,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            }).on('setPosition', function (event, slick) {
                // if (window.matchMedia("screen and (min-width: 478px)").matches) {
                    var mh = 0;
                    $('.doctors-main-slider .card-body').each(function (i, el) {
                        if ($(el).height() > mh) {
                            mh = $(el).innerHeight();
                        }
                    });
                    $('.doctors-main-slider .card-body').height(mh);
                // }
            });
        }
    },
    doctorsSlider: function () {
        if ($('.doctors-slider .card').length > 3) {
            var doctorsSlider = $('.doctors-slider');

            doctorsSlider.slick({
                autoplay: false,
                autoplaySpeed: 3000,
                infinite: false,
                arrows: false,
                dots: true,
                fade: false,
                // prevArrow: $prevArrow,
                // nextArrow: $nextArrow,
                adaptiveHeight: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 478,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });

        }
        if (window.matchMedia("screen and (max-width: 575.98px)").matches && $('.doctors-slider .card').length == 2) {
            var doctorsSlider = $('.doctors-slider');
            doctorsSlider.slick({
                autoplay: false,
                autoplaySpeed: 3000,
                infinite: false,
                arrows: false,
                dots: true,
                fade: false,
                adaptiveHeight: true,
                slidesToShow: 1,
                slidesToScroll: 1
            })
        }
    },
    profSlider: function() {
        if (window.matchMedia("screen and (max-width: 767.98px)").matches) {
            if ($('.home .prof').length > 0) {
                var profSlider = $('.prof');
                profSlider.slick({
                    autoplay: false,
                    autoplaySpeed: 3000,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    fade: false,
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                });
            }
        }
    },
    countersSlider: function() {
        if (window.matchMedia("screen and (max-width: 575.98px)").matches) {
            if ($('.counter-items').length > 0) {
                var countersSlider = $('.counter-items');
                countersSlider.slick({
                    autoplay: false,
                    autoplaySpeed: 3000,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    fade: false,
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                });
            }
        } else {
            if ($('.counter-items').length > 0) {
                if ($('.count-items').hasClass('slick-slider')) {
                    $('.counter-items').slick('unslick');
                }
            }
        }
    },
    revealProf: function() {
        if($('.profs').length>0) {
            ScrollReveal().reveal('.profs>div', {
                delay: 500
            });
        }
    },
    defaultFormMeta: function() {
        var fromDefaultCity = 'na',
            pageH1 = $('h1').text();
        $('.wpcf7').each(function(){
            // if ($('body').hasClass('c-kh')) {
            //     fromDefaultCity = 'kh';
            if ($('body').hasClass('c-kyiv')) {
                fromDefaultCity = 'kyiv';
            }
            if($(this).find('[name="target-click"]').val() == '' && $(this).find('[name="city"]').val() == "") {
                $(this).find('[name="target-click"]').val('Страница: ' + pageH1);
                $(this).find('[name="city"]').val(fromDefaultCity);
                $(this).find('.popup-city-change[data-city="' + fromDefaultCity + '"]').show();
            }
        });
        if($('.article .wpcf7').length > 0) {
            $('.article .wpcf7').each(function(){
                var formCity = $(this).find('[name="city"]').val();
                $(this).find('.popup-city-change[data-city="' + $.trim(formCity) + '"]').show();
            });
        }
    },
    popupOrder: function () {
        $this = this;
        function orderInfo($obj, $class) {
            var h1 = $('h1').text();
            if ($obj.data('order')) {
                $($class + ' [name="target-click"]').val($obj.data('order') + ' | Страница: ' + h1);
            } else {
                $($class + ' [name="target-click"]').val('Данные в кнопке не заполнены' + ' | Страница: ' + h1);
            }
            if ($obj.data('title')) {
                $($class + ' .popup-title').text($obj.data('title'));
            } else {
                $($class + ' .popup-title').text($($class + ' .popup-title').data('title'));
            }
            if($($class + ' [name="city"]').length>0) {
                if ($obj.data('city')) {
                    $($class + ' [name="city"]').val($obj.data('city'));
                } else {
                    $($class + ' [name="city"]').val('na');
                }
                $($class).find('.popup-city-change').hide();
                $($class).find('[data-city='+ $obj.data('city') +']').show();
            }
        }

        $(document).on('click', '.btn-order', function(event) {
            event.preventDefault();
            orderInfo($(this), '.popup-order');
            $.fancybox.open({
                src: '.popup-order',
                type: 'inline',
                toolbar: false,
                smallBtn: true,
            });
        });

        // $('.btn-testimonial').on('click', function (event) {
        //     event.preventDefault();
        //     $.fancybox.open({
        //         src  : '.popup-testimonial',
        //         type : 'inline',
        //         toolbar  : false,
        //         smallBtn : true,
        //     });
        // });
    },
    counter: function() {
        $('.counter').counterUp();
    },
    mapLoad: function() {
        document.querySelector('.map-load').addEventListener('click', function () {
            var iframe = document.createElement('iframe'),
                city = $(this).attr('data-city'),
                iframeLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4352.364220086437!2d36.205374723597956!3d50.06449924842877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a43d35859d57%3A0x5109c36979dd8f3!2sKlynyka%20%22Unilik%22!5e0!3m2!1sen!2sua!4v1591094901892!5m2!1sen!2sua";

            if(city == 'kiev') {
                iframeLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.6747175086857!2d30.513483315732028!3d50.46578167947744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce6abdc8ee5d%3A0x1527cd852edf3bf6!2sSpaska%20St%2C%205%2C%20Kyiv%2C%2004071!5e0!3m2!1sen!2sua!4v1613997689958!5m2!1sen!2sua";
            }

            iframe.frameBorder = 0;
            iframe.width = "500px";
            iframe.height = "500px";
            iframe.allowfullscreen = "true";
            iframe.setAttribute("src", iframeLink);

            document.getElementById("gmap").appendChild(iframe);
            var el = this;
            el.style.opacity = '0';
            setTimeout(function () {
                el.parentNode.removeChild(el)
            }, 2000);
        })
    }
};



(function($){
    $(document).ready(function() {
        wpcf7.cached = 0;
        unilik.init();
    });

    // $(window).on('load', function() { });

    $(window).on('scroll', function() {
        unilik.backToTopScroll();
    });

    $(window).on('orientationchange', function() {
        unilik.countersSlider();
        unilik.doctorsSlider();
    });
})(jQuery);

// if (window.matchMedia("screen and (min-width: 992px)").matches) {
//     if ($('.home').length > 0) {
//         sal({
//             threshold: .05
//         });
//     } else {
//         sal({
//             threshold: .025
//         });
//     }
// }
//