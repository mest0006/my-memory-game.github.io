const $container = document.getElementById('container')
const $easy = document.getElementById('easy')
const $normal = document.getElementById('normal')
const $hard = document.getElementById('hard')
const $gameWinner = document.getElementById('win')
var $levels = document.getElementsByTagName('button')
var $google = document.getElementById('google_translate_element')

const icons = ['fan', 'fan', 'apple-alt', 'apple-alt', 'code-branch', 'code-branch', 'robot', 'robot', 'desktop', 'desktop', 'file-code', 'file-code', 'camera', 'camera', 'crown', 'crown']

function shuffle (x) {
  var currentIndex = x.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = x[currentIndex];
    x[currentIndex] = x[randomIndex];
    x[randomIndex] = temporaryValue;
  }
  return x
}


const easyCards = shuffle(icons.slice(0, 6))
const normalCards = shuffle(icons.slice(0, 8))
const hardCards = shuffle(icons)
const easy = []
const normal = []
const hard = []
const gameWinner = []

let clickDisabled = false;

let tracker = {
  firstCardFlipped: false,
  secondCardFlipped: false,
  firstCard: '',
  secondCard: '',
  pairs: 100
}
$levels[0].addEventListener("click", function (e) {
  $google.setAtribute("Style", "display: none;")
  $container.setAttribute("Style", "display: none;")
  $easy.setAttribute("Style", "display: grid;")
  tracker.pairs = 3
  for (const easyCard of easyCards) {
    easy.push(`<div class="cards back" data-framework="${easyCard}"><i class="fas fa-${easyCard}"></i></div>`)
  }

  $easy.innerHTML = easy.join(' ')
})

$levels[1].addEventListener("click", function (e) {
$google.setAtribute("Style", "display: none;")
  $container.setAttribute("Style", "display: none;")
  $normal.setAttribute("Style", "display: grid;")
  tracker.pairs = 4
  for (const normalCard of normalCards) {
    normal.push(`<div class="cards back" data-framework="${normalCard}"><i class="fas fa-${normalCard}"></i></div>`)
  }

  $normal.innerHTML = normal.join(' ')
})

$levels[2].addEventListener("click", function (e) {
  $google.setAtribute("Style", "display: none;")
  $container.setAttribute("Style", "display: none;")
  $hard.setAttribute("Style", "display: grid;")
  tracker.pairs = 16
  for (const hardCard of hardCards) {
    hard.push(`<div class="cards back" data-framework="${hardCard}"><i class="fas fa-${hardCard}"></i></div>`)
  }

  $hard.innerHTML = hard.join(' ')
})

function cardFlipper (e) {
  $icon = e.target.closest('.back')

  if ($icon && !tracker.secondCardFlipped) {
    setTimeout(() => {
      e.target.classList.add('flip')
      e.target.classList.remove('unflip')
    }, 125)

    setTimeout(() => {
      $icon.classList.remove('back')
      $icon.classList.add('cards')
    }, 275)


    if (!tracker.firstCardFlipped) {
      tracker.firstCardFlipped = true
      tracker.firstCard = $icon
    }

    else {
      tracker.secondCardFlipped = true
      tracker.secondCard = $icon

      match()
    }
  }
  console.log(tracker.firstCard)
  console.log(tracker.secondCard)
}

function match () {
  if (tracker.firstCard.dataset.framework === tracker.secondCard.dataset.framework) {
    card()
    tracker.pairs--
    winner()
  }

  else {
    wrong()
  }
}

function card () {
  tracker.firstCard.removeEventListener("click", cardFlipper)
  tracker.secondCard.removeEventListener("click", cardFlipper)
  tracker.firstCard.classList.add('match')
  tracker.secondCard.classList.add('match')
  tracker.firstCardFlipped = false
  tracker.secondCardFlipped = false


}

function Reset () {
  tracker.firstCardFlipped = false
  tracker.secondCardFlipped = false
  tracker.firstCard.classList.add('cards')
  tracker.secondCard.classList.add('cards')
  tracker.firstCard.classList.add('back')
  tracker.secondCard.classList.add('back')
  tracker.firstCard.classList.remove('flip')
  tracker.secondCard.classList.remove('flip')
  tracker.firstCard.classList.remove('unflip')
  tracker.secondCard.classList.remove('unflip')
}

function wrong () {
  tracker.firstCard.classList.remove('flip')
  tracker.secondCard.classList.remove('flip')
  setTimeout(() => {
    tracker.firstCard.classList.add('unflip')
    tracker.secondCard.classList.add('unflip')
  }, 850)
  setTimeout(() => {
    tracker.firstCard.classList.add('back')
    tracker.secondCard.classList.add('back')
    tracker.firstCard.classList.remove('cards')
    tracker.secondCard.classList.remove('cards')
  }, 1000)


  setTimeout(() => {

    Reset()
  }, 1035)
}


function winner () {
  if (tracker.pairs == 0) {
    $easy.classList.add('spin')
    $normal.classList.add('spin')
    $hard.classList.add('spin')
    setTimeout(() => {
      $gameWinner.setAttribute("Style", "display: flex;")

    }, 300)


  }
}




$levels[3].addEventListener("click", function (e) {
  location.reload();
})


$easy.addEventListener('click', cardFlipper);
$normal.addEventListener('click', cardFlipper);
$hard.addEventListener('click', cardFlipper);
