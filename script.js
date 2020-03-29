
let $buttons = document.getElementById('buttons')

let $h1 = document.getElementById('h1')





let buttons = {
  Easy: [],
  Medium: [],
  Hard: []
}


const list = Object.keys(buttons)

$buttons.innerHTML = list.map(function (button) {
  return `  
  <button class="button" data-button="${button}">${button}</button>`
}).join('')


$buttons.addEventListener('click', function (e) {
  if (e.target.classList.contains('button')) {
    grid.classList.add('show')
    $buttons.classList.add('hidden')
    $h1.classList.add('hidden')
  }

})
const cardsArray = [
  {
    name: 'andriod',
    img: 'img/andriod.png',
  },
  {
    name: 'apple',
    img: 'img/apple.png',
  },
  {
    name: 'github',
    img: 'img/github.png',
  },
  {
    name: 'java',
    img: 'img/java.png',
  },
  {
    name: 'react',
    img: 'img/react.png',
  },
  {
    name: 'sass',
    img: 'img/sass.png',
  },
  {
    name: 'snapchat',
    img: 'img/snapchat.png',
  }
  ,
  {
    name: 'windows',
    img: 'img/windows.png',
  }
]

var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name,
    img = item.img;


  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var match = function match () {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};

var resetGuesses = function resetGuesses () {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function (event) {

  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});







