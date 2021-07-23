import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/combineReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const stores = () => {
	const create_store = createStore(
		reducers,
		composeEnhancers(applyMiddleware(thunk))
	);
	return create_store;
};

export default stores;
