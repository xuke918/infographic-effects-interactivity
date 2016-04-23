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
