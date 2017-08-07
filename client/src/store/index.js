import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import moment from 'moment';

const loggerMiddleware = createLogger();

export const initialState = {
	selectedDate: moment().format('MMM D, YYYY')
};

const enhancers = [];
const middleWare = [
	thunkMiddleware,
	loggerMiddleware
];

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = (window.devToolsExtension) ? window.devToolsExtension() : f => f;
	enhancers.push(devToolsExtension);
}

const composedEnhancers = compose(
	applyMiddleware(...middleWare),
	...enhancers
);

function configureStore() {
	return createStore(rootReducer, initialState, composedEnhancers);
}

export default configureStore();
