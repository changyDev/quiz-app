
const store = {
  questions: [
    {
      question: 'How many NBA championships did Kobe Bryant win?',
      answers: [
        '2',
        '3',
        '4',
        '5'
      ],
      correctAnswer: '5'
    },
    {
      question: 'What team did Kobe Bryant play for?',
      answers: [
        'Bulls',
        'Lakers',
        'Celtics',
        'Spurs'
      ],
      correctAnswer: 'Lakers'
    },
    {
      question: 'Which team did Michael Jordan win 6 rings with?',
      answers: [
        'Wizards',
        'Celtics',
        'Bulls',
        'Rockets'
      ],
      correctAnswer: 'Bulls'
    },
    {
      question: 'Who is the all time scoring leader as of 2021?',
      answers: [
        'Kareem Abdul-Jabbar',
        'Lebron James',
        'Kobe Bryant',
        'Karl Malone'
      ],
      correctAnswer: 'Kareem Abdul-Jabbar'
    },
    {
      question: 'Who was the only player to score 100 points in a game?',
      answers: [
        'Devon Booker',
        'Michael Jordan',
        'Kobe Bryant',
        'Wilt Chamberlain'
      ],
      correctAnswer: 'Wilt Chamberlain'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

//Generating the initial welcome screen with the start quiz button
function welcomeScreen() {
  return `
    <div class="welcome">
      <p>Welcome, this is a basic quiz about basketball.</p>
        <div class="buttons">
          <button type="button" id="startQuiz">Start Quiz</button>
        </div>
    </div>
  `;
}

//Generates the current question and the score
function generateScoreCurrentQuestion() {
  return `
    <div class="score">
      <ul>
        <li>Question: ${store.questionNumber + 1}/${store.questions.length}</li>
        <li>Score: ${store.score}/${store.questions.length}</li>
      </ul>
    </div>
  `;
}

//Generates the current question
function generateQuestion() {
  return `
    <div class="question">
      <p>${store.questions[store.questionNumber].question}</p>
    </div>
  `;
}

//Generates the answers to the current question
function generateAnswers() {
  let currQuestion = store.questions[store.questionNumber].answers;
  let answersChoices = '';
  currQuestion.forEach(element => {
    answersChoices +=`
      <div class="answerList">
        <input type="radio" name="answer" id="${element}" value="${element}">
        <label for="${element}">${element}</label>
      </div>`
      });
  return answersChoices;
}

//Combines the the score, question, and answers and creates the submit and next buttons
function generateButtonsandCombine() {
  let combineHtml = '<form class="question-form"><fieldset>';
  combineHtml += generateScoreCurrentQuestion();
  combineHtml += generateQuestion();
  combineHtml += generateAnswers();
  combineHtml += `
  <div class="buttons">
    <button type="submit" id="submit">Submit</button>
    <button type="button" id="next">Next</button>
  </div></fieldset></form>
  `;
  return combineHtml;
}

//Generates the feedback to the user and lets them know if they are right
function generateFeedback() {
  let userAnswer = $('input[name=answer]:checked').val();
  if(userAnswer.length != 0){
    console.log('Answer submitted ' + userAnswer);
    if(userAnswer === store.questions[store.questionNumber].correctAnswer){
      store.score++;
      return`
      <div class="correctAnswer">That is correct!~</div>
      `;
      }
    else {
      return `
      <div class="incorrectAnswer">The correct answer is ${store.questions[store.questionNumber].correctAnswer}.</div>
      `}
  }
}

//Hides the submit button while disabling the radio buttons and shows the next button
function generateNextandDisableButtons() {
  $('#submit').hide();
  $('#next').show();
  $('input[type=radio]').attr('disabled', true);
}

//Generates the final score
function generateFinalScore() {
  return `
    <div id="finalScore">Final Score ${store.score}/${store.questions.length}</div>
    <div class="buttons">
      <button type="button" id="restart">Restart Quiz</button>
    </div>
  `;
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
//Conditional render function and calls other functions based on the criteria
function render() {
  if(store.quizStarted === false){
    $('main').html(welcomeScreen());
  }
  else if(store.questionNumber < store.questions.length){
    $('main').html(generateButtonsandCombine());
  }
  else{
    $('main').html(generateFinalScore());
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//Handles the start quiz button
function handleStartQuiz() {
  $('main').on('click', '#startQuiz', (event) => {
    store.quizStarted = true;
    console.log('Quiz started');
    render();
  });
}

//Handles the submit button
function handleSubmit() {
  $('main').on('click', '#submit', (event) => {
    event.preventDefault();
    $('.buttons').prepend(generateFeedback());
    generateNextandDisableButtons();
  });
}

//Handles the next button
function handleNext() {
  $('main').on('click', '#next', (event) => {
    store.questionNumber++;
    render();
  });
}

//Handles the restart button and resets the values
function handleRestart() {
  $('main').on('click', '#restart', (event) =>{
    store.score = 0;
    store.questionNumber = 0;
    store.quizStarted = false;
    render();
  });
}

function handleQuiz(){
  render();
  handleStartQuiz();
  handleSubmit();
  handleNext();
  handleRestart();
}

$(handleQuiz);
