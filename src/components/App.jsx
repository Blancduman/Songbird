import React, { useReducer } from 'react';
import Header from './Header';
import GameStage from './GameStage';
import GuessBirdMainView from './GuessBirdMainView';
import Answers from './Answers';
import ChoiseMainview from './ChoiseMainview';
import Footer from './Footer';
import EndGame from './EndGame';
// import imageBird from '../api/flickr';
// import audioBird from '../api/xenoCanto';
import birdsData from '../data/birds';

import './App.scss';

import '@babel/polyfill';

// const initialGameState = {
//   score: 0,
//   stage: 0,
//   quizNames: [
//     'Разминка',
//     'Воробьиные',
//     'Лесные птицы',
//     'Певчие Птицы',
//     'Хищные птицы',
//     'Морские птицы',
//   ],
//   quizAnswers: [
//     ['Ворон', 'Журавль', 'Ласточка', 'Козодой', 'Кукушка', 'Синица'],
//     ['Воробей', 'Грач', 'Галка', 'Певчий дрозд', 'Сорока', 'Сойка'],
//     ['Зяблик', 'Клёст', 'Горлица', 'Дятел', 'Удод', 'Стриж'],
//     ['Жаворонок', 'Соловей', 'Скворец', 'Иволга', 'Свиристель', 'Щегол'],
//     ['Орёл', 'Коршун', 'Лунь', 'Сокол', 'Ястреб', 'Филин'],
//     ['Альбатрос', 'Олуша', 'Буревестник', 'Пеликан', 'Пингвин', 'Чайка'],
//   ],
// };

function makeQuestion(arrayIndex) {
  if (arrayIndex > birdsData[0].birds.length - 1) {
    return null;
  }
  const random = Math.floor(0 + Math.random() * birdsData[0].birds.length);
  const newQuestion = {
    ...birdsData[arrayIndex].birds[random],
    index: random,
  };
  return newQuestion;
}

function makeAnswers(arrayIndex) {
  if (arrayIndex > birdsData[0].birds.length - 1) {
    return null;
  }
  const newAnswers = birdsData[arrayIndex].birds.map((bird, index) => {
    return {
      ...bird,
      index,
      status: '',
    };
  });
  return newAnswers;
}

const initialGameState = {
  // score: 0,
  // currentAnswer: 0,
  // selectedBird: null,
  // stage: 0,
  // isStageFinished: false,
  // price: 5,
  // birdsData,
  // isFinished: false,
  score: 0,
  stage: 0,
  price: 5,
  isStageFinished: false,
  question: makeQuestion(0),
  answers: makeAnswers(0),
  selectedBird: null,
  isFinished: false,
};

function init(initialState) {
  return {
    ...initialState,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return init(initialGameState);
    case 'NEXT_LEVEL':
      return {
        ...state,
        price: 5,
        stage: state.stage + 1,
        isStageFinished: false,
        isFinished: state.stage + 1 > 5,
        question: makeQuestion(state.stage + 1),
        answers: makeAnswers(state.stage + 1),
        selectedBird: null,
      };
    case 'ANSWER':
      if (action.index === state.question.index && !state.isStageFinished) {
        return {
          ...state,
          isStageFinished: true,
          score: state.score + state.price,
          answers: state.answers.map(i => {
            if (i.index === action.index) {
              const newAnswer = i;
              newAnswer.status = 'correct';
              return newAnswer;
            }
            return i;
          }),
          selectedBird: state.answers[action.index],
        };
      }
      if (state.isStageFinished || state.answers[action.index].status !== '') {
        return {
          ...state,
          selectedBird: state.answers[action.index],
        };
      }
      return {
        ...state,
        asnwers: state.answers.map(i => {
          if (i.index === action.index) {
            const newAnswer = i;
            newAnswer.status = 'incorrect';
            return newAnswer;
          }
          return i;
        }),
        price: Math.min(Math.max(state.price - 1, 0), 5),
        selectedBird: state.answers[action.index],
      };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialGameState, init);
  // const actionSelectAnswer = index => dispatch({ type: 'ANSWER', index });
  function renderQuiz() {
    return (
      <>
        <GuessBirdMainView bird={state.question} stageFinished={state.isStageFinished} />
        <main>
          <Answers selectBird={dispatch} answers={state.answers} />
          <ChoiseMainview bird={state.selectedBird} />
        </main>
        <Footer
          stageFinished={state.isStageFinished}
          nextStage={dispatch}
          finished={5 - state.stage === 0}
        />
      </>
    );
  }

  function renderEnd() {
    return <EndGame score={state.score} reset={dispatch} />;
  }
  return (
    <div className="container">
      <Header score={state.score} onClick={() => dispatch({ type: 'PLAY' })} />
      <GameStage stages={state.quizNames} activeStage={state.stage} />
      {state.isFinished ? renderEnd() : renderQuiz()}
    </div>
  );
};

export default App;
