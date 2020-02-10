import React, { useReducer } from 'react';
// import { Container, Row } from 'react-bootstrap';
import Header from './Header';
import GameStage from './GameStage';
import GuessBirdMainView from './GuessBirdMainView';
import Answers from './Answers';
import ChoiseMainview from './ChoiseMainview';
import Footer from './Footer';
import birdRandom from '../assets/media/XC512582-190604_1087_Grus_tok.mp3';

import './App.scss';

// const vorob = ['Воробей', 'Грач', 'Галка', 'Певчий дрозд', 'Сорока', 'Сойка'];
// const forestBirds = ['Зяблик', 'Клёст', 'Горлица', 'Дятел', 'Удод', 'Стриж'];
// const singerBirds = ['Жаворонок', 'Соловей', 'Скворец', 'Иволга', 'Свиристель', 'Щегол'];
// const hunterBirds = ['Орёл', 'Коршун', 'Лунь', 'Сокол', 'Ястреб', 'Филин'];
// const seaBirds = ['Альбатрос', 'Олуша', 'Буревестник', 'Пеликан', 'Пингвин', 'Чайка'];

const initialGameState = {
  score: 0,
  stage: 0,
  // birdFamilies: ['Воробьиные', 'Лесные птицы', 'Певчие Птицы', 'Хищные птицы', 'Морские птицы'],
  quizNames: [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие Птицы',
    'Хищные птицы',
    'Морские птицы',
  ],
  quizAnswers: [
    ['Ворон', 'Журавль', 'Ласточка', 'Козодой', 'Кукушка', 'Синица'],
    ['Воробей', 'Грач', 'Галка', 'Певчий дрозд', 'Сорока', 'Сойка'],
    ['Зяблик', 'Клёст', 'Горлица', 'Дятел', 'Удод', 'Стриж'],
    ['Жаворонок', 'Соловей', 'Скворец', 'Иволга', 'Свиристель', 'Щегол'],
    ['Орёл', 'Коршун', 'Лунь', 'Сокол', 'Ястреб', 'Филин'],
    ['Альбатрос', 'Олуша', 'Буревестник', 'Пеликан', 'Пингвин', 'Чайка'],
  ],
};

function init(initialState) {
  return initialState;
}

function reducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return init(initialGameState);
    case 'NEXT_LEVEL':
    case 'ANSWER':
    case 'PLAY':
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialGameState, init);
  // useEffect();
  return (
    <div className="container">
      <Header score={state.score} onClick={() => dispatch({ type: 'PLAY' })} />
      <GameStage stages={state.quizNames} activeStage={state.stage} />
      <GuessBirdMainView name="a" name2="b" audio={birdRandom} />
      <main className="main">
        <Answers answers={state.quizAnswers[state.stage]} />
        <ChoiseMainview name="a" name2="b" description="car" audio={birdRandom} />
      </main>
      <Footer />
    </div>
    // <Container>
    //   <Row>
    //     <Header
    //       onClick={() => {
    //         dispatch({ type: 'NEXT_LEVEL ' });
    //       }}
    //       score={state.score}
    //     />
    //   </Row>
    //   <Row>
    //     <GameStage stages={state.quizNames} activeStage={state.stage} />
    //   </Row>
    //   <Row>
    //     <GuessBirdMainView />
    //   </Row>
    // </Container>
  );
};

export default App;
