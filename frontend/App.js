import React from 'react';
import {createStackNavigator} from 'react-navigation';


import Algorithms from './components/question_section/algorithm';
import HomePage from './components/home_login_signup/homePage';
// import SignUp from './components/home_login_signup/signUp';

const RootStack = createStackNavigator(
  {
    Home: HomePage,
    Algorithms: Algorithms
  },
  {
    initialRouteName: "Algorithms"
  }
)

const App = () => (
  <RootStack />
)

export default App;