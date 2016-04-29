var $length = $('#length');
var lengthMax = parseInt($length.attr('data-max'), 10);
var current = 0;
var updateLength = function () {
  current += 4000;
  $length.html(current);
  updateTick();
};

var updateTick = function () {
  if (current < lengthMax) {
    requestAnimationFrame(updateLength);
  }
};

updateLength();


$('.footer').on('click', function (e) {
  $('.footer').toggleClass('is-engaged');
});

$('.btn').on('click', function () {
  $('btn').toggleClass('.btn:active');
});

$('.btn').on('click', function () {
  if ($(this).hasClass('dino')) {
    console.log('It’s a dinosaur!');
  } else {
    console.log('It isn’t a dinosaur!');
  }
});

$('.btn').on('click', function () {
  if ($(this).hasClass('dino')) {
    console.log('It’s a dinosaur!');
  } else {
    console.log('It isn’t a dinosaur!');
  }
});


$('.age').on('click', function(e) {
  $(this).addClass('is-clicked');
});

$('.age').on('animationend', function (e) {
  $(this).removeClass('is-clicked');
});

$('.square').on('click', function (e) {
  $('.square').toggleClass('is-clicked')
});
