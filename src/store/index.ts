import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import sagas from './sagas';
import reducer, { State } from './reducer';

export { State };
export * from './actions';
export * from './selectors';

export default (): Store<State> => {
    const devTools = typeof window !== 'undefined' && window.devToolsExtension
        ? window.devToolsExtension()(createStore)
        : createStore;

    const sagaMiddleware = createSagaMiddleware();
    const middleware: Array<Middleware> = [sagaMiddleware];

    if (process.env.NODE_ENV === 'development') {
        middleware.push(createLogger());
    }

    const createStoreWithMiddleware = applyMiddleware(...middleware)(devTools);

    const store: Store<State> = createStoreWithMiddleware(reducer);
    sagaMiddleware.run(sagas());

    if (module.hot) {
        module.hot.accept('./reducer', () => {
           const nextReducer = require('./reducer').default;
           store.replaceReducer(nextReducer); 
        });
    }

    return store;
};
