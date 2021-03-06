var $length = $('#length');
var lengthMax = parseInt($length.attr('data-max'), 10);
var current = 0;
var updateLength;
var updateTick;
var $pinkboxes = $('.pinkboxes');
var $data = $('.data');
var $bar = $('.chart');
var $symbols = $('.symbols');

updateLength = function () {
  current += 4000;
  $length.html(current);
  updateTick();
};

updateTick = function () {
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

$('.age').on('click', function (e) {
  $(this).addClass('is-clicked');
});

$('.age').on('animationend', function (e) {
  $(this).removeClass('is-clicked');
});

$('.square').on('click', function (e) {
  $('.square').toggleClass('is-clicked');
});

$pinkboxes.on('click', function (e) {
  $data.toggleClass('show');
});

$bar.waypoint(function (direction) {
  if (direction == 'down') {
    $bar.addClass('js-bar-animate');
  } else {
    $bar.removeClass('js-bar-animate');
  }
}, {offset: '50%'});

$salary.waypoint(function (direction) {
  if (direction == 'down') {
    $symbols.addClass('js-symbols-animate');
  } else {
    $symbols.removeClass('js-symbols-animate');
  }
}, {offset: '70%'});
