$(document).ready(function () {
  $("#client").owlCarousel({
    loop: true, //enables continous looping of items
    margin: 10, //sets space between items
    nav: true, //displays navigation arrows
    responsive: {
      0: { items: 1 }, //1 items on small screens
      600: { items: 3 }, //3 items on medium screens
      1000: { items: 5 }, //5 items on large screens
    },
  });
});
