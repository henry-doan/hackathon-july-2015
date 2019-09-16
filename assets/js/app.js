angular.module('app', ['ui.bootstrap']);

function CarouselDemoCtrl($scope) {
    $scope.myInterval = 3000;
    $scope.slides = []
};
$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });

/* Next/prev and primary nav btn click handlers */

$('a.slide1').click(function() {
    $('html, body').animate({
        scrollTop: $('#slide1').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.slide2').click(function() {
    $('html, body').animate({
        scrollTop: $('#slide2').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.slide3').click(function() {
    $('html, body').animate({
        scrollTop: $('#slide3').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.slide4').click(function() {
    $('html, body').animate({
        scrollTop: $('#slide4').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.slide5').click(function() {
    $('html, body').animate({
        scrollTop: $('#slide5').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.slide6').click(function() {
    $('html, body').animate({
        scrollTop: $('#slide6').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.slide7').click(function() {
    $('html, body').animate({
        scrollTop: $('#slide7').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.slide8').click(function() {
    $('html, body').animate({
        scrollTop: $('#slide8').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.slide9').click(function() {
    $('html, body').animate({
        scrollTop: $('#slide9').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.slide10').click(function() {
    $('html, body').animate({
        scrollTop: $('#slide10').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.slide11').click(function() {
    $('html, body').animate({
        scrollTop: $('#slide11').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.slide12').click(function() {
    $('html, body').animate({
        scrollTop: $('#slide12').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.endslide').click(function() {
    $('html, body').animate({
        scrollTop: $('#endslide').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});


/* Show/hide dot lav labels on hover */
$('nav#primary a').hover(
function() {
    $(this).prev('h1').show();
},
function() {
    $(this).prev('h1').hide();
}
);

});


function redrawDotNav() {

    var topNavHeight = 50;
    var numDivs = $('section').length;

    $('#primary li a').removeClass('active').parent('li').removeClass('active');
    $('section').each(function(i, item) {
        var ele = $(item),
            nextTop;

        console.log(ele.next().html());

        if (typeof ele.next().offset() != "undefined") {
            nextTop = ele.next().offset().top;
        } else {
            nextTop = $(document).height();
        }

        if (ele.offset() !== null) {
            thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numDivs);
        } else {
            thisTop = 0;
        }

        var docTop = $(document).scrollTop() + topNavHeight;

        if (docTop >= thisTop && (docTop < nextTop)) {
            $('#primary li').eq(i).addClass('active');
        }
    });
}

/* get clicks working */
$('#primary li').click(function() {

    var id = $(this).find('a').attr("href"),
        posi,
        ele,
        padding = $('.navbar-fixed-top').height();

    ele = $(id);
    posi = ($(ele).offset() || 0).top - padding;

    $('html, body').animate({
        scrollTop: posi
    }, 'slow');

    return false;
});

/* end dot nav */
var navTop = document.querySelector('.nav-top');
var logo = document.querySelector('.logo');

document.querySelector('.nav-btn').addEventListener('click', function (e) {

 e.preventDefault();

 if (navTop.getAttribute('data-state'),logo.getAttribute('data-state') == 'expanded') {
   navTop.setAttribute('data-state', 'collapsed');
   this.setAttribute('data-state', 'inactive');
 } else {
   navTop.setAttribute('data-state', 'expanded');
   this.setAttribute('data-state', 'active');
 }
   
 if (logo.getAttribute('data-state') == 'expanded') {
   logo.setAttribute('data-state', 'collapsed');
   this.setAttribute('data-state', 'inactive');
 } else {
   logo.setAttribute('data-state', 'expanded');
   this.setAttribute('data-state', 'active');
 }
});