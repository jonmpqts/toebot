import { createStore, Store } from 'redux';
import reducer, { State } from './reducer';

export { State };
export * from './actions';
export * from './selectors';

export default (): Store<State> => {
    const store: Store<State> = createStore(reducer);

    if (module.hot) {
        module.hot.accept('./reducer', () => {
           const nextReducer = require('./reducer').default;
           store.replaceReducer(nextReducer); 
        });
    }

    return store;
};
