function initMap() {
  var uluru = {
    lat: 12.1285604,
    lng: -86.2838432
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

$('.menu').click(function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 700);
  return false;
});

$(document).ready(function () {

  var clickEvent = false;
  $('#myCarousel').carousel({
    interval: 4000
  }).on('click', '.list-group li', function () {
    clickEvent = true;
    $('.list-group li').removeClass('active');
    $(this).addClass('active');
  }).on('slid.bs.carousel', function (e) {
    if (!clickEvent) {
      var count = $('.list-group').children().length - 1;
      var current = $('.list-group li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if (count == id) {
        $('.list-group li').first().addClass('active');
      }
    }
    clickEvent = false;
  });
})

/*Back to top button*/

// When the user scrolls down 20px from the top of the document, show the button

$(document).ready(function () {
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
})