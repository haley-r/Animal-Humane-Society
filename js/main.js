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



