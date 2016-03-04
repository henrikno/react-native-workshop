'use strict';
import React, { Component, Navigator } from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rnWorkshop from './reducers/reducers';
const store = createStore(rnWorkshop);

import Router from './components/router';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ viewName: 'messageList' }}
          renderScene={(route, navigator) => <Router viewName={route.viewName} navigator={navigator}/>}
          />
      </Provider>
    );
  }
}

export default App;
