$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        prevArrow: $('.prev-button'),
        nextArrow: $('.next-button'),
        dots: true
    });
});

function initMap() {
    var kiev = {lat: 50.401699, lng: 30.2525101};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 7, center: kiev, disableDefaultUI: true});
    var marker = new google.maps.Marker({position: kiev, map: map});
}