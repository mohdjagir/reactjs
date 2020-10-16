import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Reducers/Reducer';
import usersSaga from "../Sagas/Sagas";
import { createLogger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
export function configureStore(initialState) {
 const middleware = [sagaMiddleware];
//  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer, initialState,applyMiddleware(createLogger));
 sagaMiddleware.run(usersSaga);
 return store;
}