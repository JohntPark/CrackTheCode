import React from 'react';
import {createStackNavigator} from 'react-navigation';


import HomePage from './components/home_login_signup/homePage';
import Algorithms from './components/question_section/algorithm';
import ComputerScience from './components/question_section/computer_science';
import Design from './components/question_section/design';
import Puzzle from './components/question_section/puzzle';
import AlgorithmQuestion from './components/questions_individual/algorithmQuestion';
import ComputerScienceQuestion from './components/questions_individual/computerScienceQuestion';
import DesignQuestion from './components/questions_individual/designQuestion';
import PuzzleQuestion from './components/questions_individual/puzzleQuestion';
// import SignUp from './components/home_login_signup/signUp';

const RootStack = createStackNavigator(
  {
    Home: HomePage,
    Algorithms: Algorithms,
    ComputerScience: ComputerScience,
    Design: Design,
    Puzzle: Puzzle,
    AlgorithmQuestion: AlgorithmQuestion,
    ComputerScienceQuestion: ComputerScienceQuestion,
    DesignQuestion: DesignQuestion,
    PuzzleQuestion: PuzzleQuestion
  },
  {
    initialRouteName: "Home"
  }
)

const App = () => (
  <RootStack />
)

export default App;