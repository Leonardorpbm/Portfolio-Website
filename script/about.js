const music_btn = document.querySelector('.music');
const music_box = document.querySelector('.about_music');

const foot_btn = document.querySelector('.foot');
const foot_box = document.querySelector('.about_foot');

const photos_btn = document.querySelector('.photos');
const photos_box = document.querySelector('.about_photos');

const game_btn = document.querySelector('.game');
const game_box = document.querySelector('.about_game');

const travel_btn = document.querySelector('.travel');
const travel_box = document.querySelector('.about_travel');

const black_box = document.querySelector('.black');

const close_btn = document.querySelector('.fa-xmark');
const close_btn_foot = document.querySelector('.foot-btn');
const close_btn_game = document.querySelector('.game-btn');
const close_btn_travel = document.querySelector('.travel-btn');
const close_btn_photos = document.querySelector('.photos-btn');

music_btn.addEventListener('click', function () {
  music_box.style.opacity = '1';
  music_box.style.zIndex = '3';
  music_box.style.pointerEvents = 'all';
  black_box.style.opacity = '0.5';
  black_box.style.zIndex = '2';
  document.body.style.overflowY = 'hidden';
});

close_btn.addEventListener('click', function () {
  music_box.style.opacity = '0';
  music_box.style.zIndex = '-1';
  music_box.style.pointerEvents = 'none';
  black_box.style.opacity = '0';
  black_box.style.zIndex = '-2';
  document.body.style.overflowY = 'scroll';
});

foot_btn.addEventListener('click', function () {
  foot_box.style.opacity = '1';
  foot_box.style.zIndex = '3';
  foot_box.style.pointerEvents = 'all';
  black_box.style.opacity = '0.5';
  black_box.style.zIndex = '2';
  document.body.style.overflowY = 'hidden';
});

close_btn_foot.addEventListener('click', function () {
  foot_box.style.opacity = '0';
  foot_box.style.zIndex = '-1';
  foot_box.style.pointerEvents = 'none';
  black_box.style.opacity = '0';
  black_box.style.zIndex = '-2';
  document.body.style.overflowY = 'scroll';
});

game_btn.addEventListener('click', function () {
  game_box.style.opacity = '1';
  game_box.style.zIndex = '3';
  game_box.style.pointerEvents = 'all';
  black_box.style.opacity = '0.5';
  black_box.style.zIndex = '2';
  document.body.style.overflowY = 'hidden';
});

close_btn_game.addEventListener('click', function () {
  game_box.style.opacity = '0';
  game_box.style.zIndex = '-1';
  game_box.style.pointerEvents = 'none';
  black_box.style.opacity = '0';
  black_box.style.zIndex = '-2';
  document.body.style.overflowY = 'scroll';
});

travel_btn.addEventListener('click', function () {
  travel_box.style.opacity = '1';
  travel_box.style.zIndex = '3';
  travel_box.style.pointerEvents = 'all';
  black_box.style.opacity = '0.5';
  black_box.style.zIndex = '2';
  document.body.style.overflowY = 'hidden';
});

close_btn_travel.addEventListener('click', function () {
  travel_box.style.opacity = '0';
  travel_box.style.zIndex = '-1';
  travel_box.style.pointerEvents = 'none';
  black_box.style.opacity = '0';
  black_box.style.zIndex = '-2';
  document.body.style.overflowY = 'scroll';
});

photos_btn.addEventListener('click', function () {
  photos_box.style.opacity = '1';
  photos_box.style.zIndex = '3';
  photos_box.style.pointerEvents = 'all';
  black_box.style.opacity = '0.5';
  black_box.style.zIndex = '2';
  document.body.style.overflowY = 'hidden';
});

close_btn_photos.addEventListener('click', function () {
  photos_box.style.opacity = '0';
  photos_box.style.zIndex = '-1';
  photos_box.style.pointerEvents = 'none';
  black_box.style.opacity = '0';
  black_box.style.zIndex = '-2';
  document.body.style.overflowY = 'scroll';
});
