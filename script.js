


let memory = []
let buttons = {
  Easy: [],
  Medium: [],
  Hard: []
}

const quiz = {
  deck: null,
  card: 0,
  total: 0
}
const list = Object.keys(buttons)

let $buttons = document.getElementById('buttons')
let $card = document.querySelectorAll('memory-cards')
let $memoryGame = document.getElementById('memory-playing')
let button = document.getElementById('button')
let $game = document.getElementById('game')
function startMemory (deck) {

  quiz.card = 0
  quiz.total = quiz.deck.length
  showCard()
  $quiz.classList.add('display')
}

function showCard () {
  $memoryGame.classList.remove('display')

  $question.textContent = quiz.deck[quiz.card].question
  $answer.textContent = quiz.deck[quiz.card].answer
}
for (let i = 0; i <= 1; i++) {

  memory.push(` 
  
  <div class="memory-cards">
  <i id="hidden" class="fab fa-android fa-5x"></i>
</div>


<div class="memory-cards">
  <i id="hidden" class="fab fa-apple fa-5x"></i>
</div>

<div class="memory-cards">
  <i id="hidden" class="fas fa-grin fa-5x"></i>
</div>

<div class="memory-cards">
  <i id="hidden" class="fab fa-bluetooth fa-5x"></i>
</div>

<div class="memory-cards">
  <i id="hidden" class="fas fa-grin-beam fa-5x"></i>
</div>
<div class="memory-cards">
  <i id="hidden" class="fas fa-code fa-5x"></i>
</div> 
  
 `)

}
$memoryGame.innerHTML = memory.join('')



$buttons.innerHTML = list.map(function (button) {
  return `<button class="button" data-button="${button}">${button}</button>`
}).join('')

$game.addEventListener('click', function (e) {
  if (e.target.classList.contains('button')) {
    $memoryGame.classList.add('show')
    $buttons.classList.add('hidden')
  }

})