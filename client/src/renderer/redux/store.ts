import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { DefaultModes } from '../utils/default_modes';
import { Patterns } from '../utils/patterns';

import thunk from 'redux-thunk';
import { portListReducer } from './reducers/portReducers';

const initialState: object = {
	DefaultModes: DefaultModes.getModes(),
	Patterns: {
		name: 'Strobe',
		args: [
			{
				name: 'Group Size',
				min: 0,
				max: 16,
				tooltip: 'Colors used in each set. If 0 or more than the number of colors, all the colors are used.',
				default: 0
			},
			{
				name: 'Skip After',
				min: 0,
				max: 16,
				tooltip: "Colors skipped after each set. If 0, it's the same as group size.",
				default: 0
			},
			{
				name: 'Repeat Group',
				min: 1,
				max: 100,
				tooltip: 'Times set is repeated before skipping.',
				default: 1
			}
		],
		timings: [
			{
				name: 'Strobe',
				tooltip: 'Length color is shown.',
				default: 10
			},
			{
				name: 'Blank',
				tooltip: 'Length blank is shown after each color.',
				default: 16
			},
			{
				name: 'Gap',
				tooltip: 'Length blank is shown after last blank in set.',
				default: 0
			}
		]
	}
};

const reducer = combineReducers({
	portList: portListReducer
});

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
console.log({ store: store.getState() });
export default store;
