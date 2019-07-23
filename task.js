let question = document.getElementById( 'poll__title' );
let answers = document.getElementById( 'poll__answers' );
let insert = '';

function button( event ) {
  event.preventDefault();
  if ( event.target.classList.contains( 'poll__answer' ) ) {
    alert( 'Спасибо за ваш голос' );
  }
}

function createTest( object ) {
  question.textContent = object.data.title;

  for ( let answer in object.data.answers ) {
    let ins = object.data.answers[answer].replace( /[^А-Я, а-я, A-Z, a-z]/g, '' );
    insert += `<button class="poll__answer">${ins}</button>`;
  }
  answers.innerHTML = insert;
  answers.addEventListener( 'click', button );
}

let xhr = new XMLHttpRequest();
xhr.open( 'GET',  'https://netology-slow-rest.herokuapp.com/poll.php' );
xhr.send();
xhr.addEventListener( 'load', () => {
  let getArray = JSON.parse( xhr.responseText );
  createTest( getArray );
});
