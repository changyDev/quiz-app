
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
function welcomeScreen() {
  return `
    <div class="welcome">
      <p>Welcome, this is a basic quiz about basketball.</p> 
      <button type="button" id="startQuiz">Start Quiz</button>
    </div>
  `;
}

function generateScoreCurrentQuestion() {
  return `
    <div class="score">
      <ul>
        <li>"Question:" ${store.questionNumber + 1}/${store.questions.length}</li>
        <li>"Score:" ${store.score}/${store.questions.length}</li>
      </ul>
    </div>
  `;
}

function generateQuestion() {
  return `
    <div class="question">
      <p>${store.questions[store.questionNumber].question}</p>
    </div>
  `;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render() {
  if(store.quizStarted === false){
    $('main').html(welcomeScreen());
  }
  else if(score.questionNumber < score.questions.length){
    $('main').html(generateScoreCurrentQuestion());
    $('main').html(generateQuestion());
  }
  else{

  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleStartQuiz() {
  $('main').on('click', '.welcome', (event) => {
    score.quizStarted = true;
    console.log('Quiz started.');
    render();
  });
}

function handleQuiz(){
  render();
  handleStartQuiz();
}

$(handleQuiz);
