var link = document.querySelector('.call-back');
var linkTwo = document.querySelector('.consultation');
var linkFour = document.querySelector('.to-order');
var popupOne = document.querySelector('.popup-one-writeus');
var closeAll = document.querySelector('.overlay');
var overlay = document.querySelector('.overlay');

link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOne.classList.add('popup-show');
    overlay.classList.add('popup-show');
  });

linkTwo.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOne.classList.add('popup-show');
    overlay.classList.add('popup-show');
  });

linkFour.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOne.classList.add('popup-show');
    overlay.classList.add('popup-show');
  });

closeAll.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOne.classList.remove('popup-show');
    overlay.classList.remove('popup-show');
  });

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupOne.classList.contains('popup-show')) {
        popupOne.classList.remove('popup-show');
        overlay.classList.remove('popup-show');
      }
    }
  });

var linkThree = document.querySelector('.expenses');
var popupTwo = document.querySelector('.popup-one-files');
var closeAll = document.querySelector('.overlay');
var overlay = document.querySelector('.overlay');

linkThree.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupTwo.classList.add('popup-show');
    overlay.classList.add('popup-show');
  });

closeAll.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupTwo.classList.remove('popup-show');
    overlay.classList.remove('popup-show');
  });

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupTwo.classList.contains('popup-show')) {
        popupTwo.classList.remove('popup-show');
        overlay.classList.remove('popup-show');
      }
    }
  });