import React, { Component } from 'react';
// import { Actions } from "react-native-router-flux";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import combineReducer from './src/Reducers/index';
import rootSaga from './src/Sagas';
import { logger } from 'redux-logger';

import StackNavigation from './src/Components/CustomNavigation';
// import RouterComponent from './src/router/RouterComponent';
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(combineReducer, applyMiddleware(sagaMiddleWare,logger));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <StackNavigation />
      </Provider>
    );
  }
}

sagaMiddleWare.run(rootSaga);
export default App;