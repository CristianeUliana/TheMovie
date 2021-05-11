import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import store from './store';
import Routes from './routes';


const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content"/>
    <Routes />
  </Provider>
  );

export default App;