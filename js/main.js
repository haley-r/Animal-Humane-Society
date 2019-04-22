var navButton = document.querySelector('.first .info-toggle');

navButton.addEventListener('click', function(){
    document.querySelector('.featured-friends article.first')
      .classList
      .toggle('show-all')
});

var navButton = document.querySelector('.second .info-toggle');

navButton.addEventListener('click', function(){
    document.querySelector('.featured-friends article.second')
      .classList
      .toggle('show-all')
});

var navButton = document.querySelector('.third .info-toggle');

navButton.addEventListener('click', function(){
    document.querySelector('.featured-friends article.third')
      .classList
      .toggle('show-all')
});

var navButton = document.querySelector('.fourth .info-toggle');

navButton.addEventListener('click', function(){
    document.querySelector('.featured-friends article.fourth')
      .classList
      .toggle('show-all')
});


var popUp = document.querySelector('.first .more-info .button');

popUp.addEventListener('click', function(){
    document.querySelector('form')
      .classList
      .toggle('display-email-form')
});

var popUp = document.querySelector('.second .more-info .button');

popUp.addEventListener('click', function(){
    document.querySelector('form')
      .classList
      .toggle('display-email-form')
});

var popUp = document.querySelector('.third .more-info .button');

popUp.addEventListener('click', function(){
    document.querySelector('form')
      .classList
      .toggle('display-email-form')
});

var popUp = document.querySelector('.fourth .more-info .button');

popUp.addEventListener('click', function(){
    document.querySelector('form')
      .classList
      .toggle('display-email-form')
});
var closePopUp = document.querySelector('form .button');

closePopUp.addEventListener('click', function(){
    document.querySelector('form')
      .classList
      .toggle('display-email-form')
});



