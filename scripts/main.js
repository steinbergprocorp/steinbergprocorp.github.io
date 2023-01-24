"use strict";
/*----------------------------------------------
                 L O A D E R
------------------------------------------------*/
function loaderAnimation() {
  $(".loader").delay(500).fadeOut();
  $("#mask").delay(1000).fadeOut("slow", function()  {
      // $().scrollWindow({duration:100});
  });
  $("body").addClass("loaded");
  if ($('body.overflowed').length>0) { $('#jHeader').addClass('overflow');}
}


/*----------------------------------------------
              M E N U  F I X E D
------------------------------------------------*/
function menuFixed() {
    if ($(window).scrollTop() >= 85) {
        $('#jHeader').addClass('overflow');
    } else {
        $('#jHeader').removeClass('overflow');
    }
    if ($(window).scrollTop() >= ($('.jIntro').height()/2)) {
        $('#jHeader').addClass('fixed');
    } else {
        $('#jHeader').removeClass('fixed');
    }
}


/*----------------------------------------------
                 T W I T T E R
------------------------------------------------*/
function twitterfeed() {
  if ($('.twitterfeed').length>0 ) {
    var config5 = {
      "id": $('#twitter-feed').data('widget'),
      "domId": 'twitter-feed',
      "maxTweets": 4,
      "enableLinks": true,
      "showUser": true,
      "showTime": true,
      "dateFunction": '',
      "showRetweet": false,
      "customCallback": handleTweets,
      "showInteraction": false
    };

    function handleTweets(tweets){
      var x = tweets.length;
      var n = 0;
      var element = document.getElementById('twitter-feed');
      var html = '<ul class="slider-twitter">';
      while(n < x) {
        html += '<li class="gallery-cell">' + tweets[n] + '</li>';
        n++;
      }
      html += '</ul>';
      element.innerHTML = html;

      $('.slider-twitter').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true
      });
    }
    twitterFetcher.fetch(config5);
  }
}


/*----------------------------------------------
               M E N U   F U L L
------------------------------------------------*/
function menuFull() {
    var $overlay = $('.overlay');
    var $triggerOverlay = $('#trigger-overlay');
    $triggerOverlay.on('click', function(e) {
      if($overlay.hasClass('open')) {
        $overlay.removeClass('open');
        $(this).removeClass('is-active');
      } else {
        $overlay.addClass('open');
        $(this).addClass('is-active');
      }
      return false;
    });
    $overlay.find('a').on('click', function(e) {
      $overlay.removeClass('open');
      $triggerOverlay.removeClass('is-active');
    });
}


/*----------------------------------------------
            I N T R O  S L I D E R
------------------------------------------------*/
function sliderSuperSlides() {
  if ($('#slides').length>0) {
    var slides = $('#slides').superslides({
      hashchange: false,
      animation: 'fade',
      play: 10000
    });
  }
}
function slidertext() {
  if ($('#owl-main-text').length>0 ) {
    $("#owl-main-text").owlCarousel({
      autoPlay: 2000,
      goToFirst: true,
      goToFirstSpeed: 2000,
      navigation: false,
      slideSpeed: 700,
      pagination: false,
      transitionStyle: "fadeUp",
      singleItem: true
    });
  };
}


/*----------------------------------------------
          Sections appears in scroll
------------------------------------------------*/
function appearsOnScroll() {
  $('.row').on('inview', function(event, visible) {
      if (visible === true) {
        $(this).addClass('visible');
      };
  });
  // $(window).scrollTop(1); //move scroll to fires inview events
}


/*----------------------------------------------
                 P A R A L L A X
------------------------------------------------*/
function showParallax() {
  if(jQuery().parallax) {
      jQuery('.parallax-section').parallax();
  }
}


/*----------------------------------------------
               C O U N T D O W N
------------------------------------------------*/
function countdownComing() {
  // Create a countdown instance. Change the launchDay according to your needs.
  // The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
  var launchDay = new Date(2016, 12-1, 7);
  $('#timer').countdown({
    until: launchDay
  });
}


/*----------------------------------------------
                 V I D E O
------------------------------------------------*/
function videoPlayer() {
  if ($(".playerVideo").length>0) { //If there are video backgrounds
    $(".playerVideo").mb_YTPlayer();
    jQuery('.playerVideo').on("YTPPause",function(){
      jQuery('.play-video').removeClass('playing');
    });
    jQuery('.playerVideo').on("YTPPlay",function(){
      jQuery('.play-video').addClass('playing');
    });
    jQuery('.play-video').on('click', function(e) {
      if (jQuery('.play-video').hasClass('playing')) {
        jQuery(".playerVideo").pauseYTP();
      } else {
        jQuery('audio').each(function (i,e) {
          this.pause();
        });
        jQuery(".playerVideo").playYTP();
      }
      e.preventDefault();
    });
  };
}


/*----------------------------------------------
          S L I D E R  R E V O L U T I O N
------------------------------------------------*/
function mainBannerRevolution() {
  if ($("#rev_slider").length>0) {
    var revapi;
    revapi = jQuery("#rev_slider").revolution({
        sliderType:"standard",
        sliderLayout:"fullscreen",
        delay:9000,
        navigation: {
            onHoverStop: 'off',
            arrows:{enable:true}
        },
        gridwidth:1230,
        gridheight:720
    });
  }
}


/*----------------------------------------------
                    T A B S
------------------------------------------------*/
function carouselTabs() {
  var $carouselTabs = $('.carusel-tabs-text').flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    draggable: false,
    pageDots: false,
    prevNextButtons: false
  });
  $('.carousel-tabs').on( 'click', 'li', function() {
    var index = $(this).index();
    $carouselTabs.flickity( 'select', index );
    $(this).addClass('active').siblings().removeClass('active');
    return false;
  });
}


/*----------------------------------------------
              G A L L E R Y   B L O G
------------------------------------------------*/
function carouselsBlog() {
  var $carouselGalleryText = $('.carusel-gallery-text').flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    draggable: false,
    prevNextButtons: false
  });
  var $carouselGalleryPhoto = $('.carusel-gallery-photo').flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    draggable: false,
    pageDots: false,
    prevNextButtons: false
  });
  $('.carusel-gallery-tabs').on( 'click', 'li', function() {
    var index = $(this).index();
    $carouselGalleryText.flickity( 'select', index );
    $carouselGalleryPhoto.flickity( 'select', index );
    $(this).addClass('active').siblings().removeClass('active');
    return false;
  });
}


/*----------------------------------------------
        M I N I M A L  P O R T F O L I O S
------------------------------------------------*/
function galleryGrid() {
  //ISOTOPE media
  var $container = $('.work1').isotope({
    itemSelector: '.thumbnail',
    masonry: {
      columnWidth: '.thumbnail.small'
    }
  });
  // filter items on button click
  $('.filters').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.filters').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'li', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  // load more
  $('#append').on('click', function(e) {
    var newItems = $('#more-items').appendTo('.thumbnails');
    $(".thumbnails").isotope('insert', newItems );
    $(this).hide();
    return false;
  });
}

/*----------------------------------------------
              A N A L Y T I C S
------------------------------------------------*/

function sendGA(category, action, label) {
  if (ga) {
    category = category || "";
    action = action || "";
    label = label || "";
    ga('send', 'event', category, action, label);
  }
}


/*----------------------------------------------
              W O R K   G R I D
------------------------------------------------*/
function workGrid() {
  var $container5 = $('.work5').isotope({
    itemSelector: '.thumbnail',
    masonry: {
      columnWidth: '.thumbnail'
    }
  });
  // filter items on button click
  $('.filters').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $container5.isotope({ filter: filterValue });
  });
}


$(window).on('load', function(e) {
  loaderAnimation();
  galleryGrid();
  workGrid();

  //Scroll spy menu
  $('body').scrollspy({ target: '#navbar-futurebarbershop', offset: 180 });

  // $('.menu-item a[href*="#"]').on('click', function() {
  $('a[href*="#"]').on('click', function() {
   if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
     var $target = $(this.hash);
     $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
     if ($target.length) {
        var targetOffset = $target.offset().top;
        // collapse nav
        $('.navbar-collapse.in').removeClass('in').addClass('collapse');

        $('html,body').animate({scrollTop: targetOffset-$('#jHeader').height()}, 1000);


        return false;
      }
    }
  });
});

// DOM ready function
(function($) {
  if (getParameterByName('done') != null) {
		document.getElementById("form-msg").innerHTML = "Thank You! We will get back to you shortly."
		$('html, body').animate({
        scrollTop: $("#contact-form").offset().top
    }, 101);
	}

  appearsOnScroll();
  showParallax();
  twitterfeed();
  menuFull();
  sliderSuperSlides();
  setTimeout(slidertext, 1000);
  countdownComing();
  videoPlayer();
  mainBannerRevolution();
  carouselTabs();
  carouselsBlog();
})(jQuery);

// Usage: var foo = getParameterByName('foo'); // "lorem"
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(window).on("scroll", function(){
  menuFixed();
});
