import {
	PORT_LIST_REQUEST,
	PORT_LIST_SUCCESS,
	PORT_LIST_FAIL,
	PORT_CONNECT_REQUEST,
	PORT_CONNECT_SUCCESS,
	PORT_CONNECT_FAIL,
	PORT_DISCONNECT_REQUEST,
	PORT_DISCONNECT_SUCCESS,
	PORT_DISCONNECT_FAIL
	// PORT_DETAILS_REQUEST,
	// PORT_DETAILS_SUCCESS,
	// PORT_DETAILS_FAIL,
	// PORT_SAVE_REQUEST,
	// PORT_SAVE_SUCCESS,
	// PORT_SAVE_FAIL,
	// PORT_DELETE_REQUEST,
	// PORT_DELETE_SUCCESS,
	// PORT_DELETE_FAIL,
	// MY_PORT_LIST_REQUEST,
	// MY_PORT_LIST_SUCCESS,
	// MY_PORT_LIST_FAIL
} from '../types/portTypes';

export const portListReducer = (state = { ports: [] }, action: { type: any; payload: any }) => {
	switch (action.type) {
		case PORT_LIST_REQUEST:
			return { loading: true, ports: [] };
		case PORT_LIST_SUCCESS:
			return { loading: false, ports: action.payload, message: 'Ports Found' };
		case PORT_LIST_FAIL:
			return { loading: false, error: action.payload.error, message: action.payload.message };
		default:
			return state;
	}
};

export const portConnectReducer = (state = { port: {} }, action: { type: any; payload: any }) => {
	console.log({ payload: action.payload });
	switch (action.type) {
		case PORT_CONNECT_REQUEST:
			return { loading: true, port: {} };
		case PORT_CONNECT_SUCCESS:
			return { loading: false, port: action.payload, message: 'Port Connected' };
		case PORT_CONNECT_FAIL:
			return { loading: false, error: action.payload.error, message: action.payload.message };
		default:
			return state;
	}
};

export const portDisconnectReducer = (state = { port: {} }, action: { type: any; payload: any }) => {
	switch (action.type) {
		case PORT_DISCONNECT_REQUEST:
			return { loading: true, port: {} };
		case PORT_DISCONNECT_SUCCESS:
			return { loading: false, port: action.payload, message: 'Port Disonnected' };
		case PORT_DISCONNECT_FAIL:
			return { loading: false, error: action.payload.error, message: action.payload.message };
		default:
			return state;
	}
};

// export const myPaletteListReducer = (
// 	state = {
// 		ports: []
// 	},
// 	action: { type: any; payload: any }
// ) => {
// 	switch (action.type) {
// 		case MY_PORT_LIST_REQUEST:
// 			return { loading: true };
// 		case MY_PORT_LIST_SUCCESS:
// 			return { loading: false, ports: action.payload, message: 'Ports Found' };
// 		case MY_PORT_LIST_FAIL:
// 			return { loading: false, error: action.payload.error, message: action.payload.message };
// 		default:
// 			return state;
// 	}
// };

// export const portDetailsReducer = (state = { port: {} }, action: { type: any; payload: any }) => {
// 	switch (action.type) {
// 		case PORT_DETAILS_REQUEST:
// 			return { loading: true };
// 		case PORT_DETAILS_SUCCESS:
// 			return { loading: false, port: action.payload, message: 'Palette Found' };
// 		case PORT_DETAILS_FAIL:
// 			return { loading: false, error: action.payload.error, message: action.payload.message };
// 		default:
// 			return state;
// 	}
// };

// export const portDeleteReducer = (state = { port: {} }, action: { type: any; payload: any }) => {
// 	switch (action.type) {
// 		case PORT_DELETE_REQUEST:
// 			return { loading: true };
// 		case PORT_DELETE_SUCCESS:
// 			return { loading: false, port: action.payload, success: true, message: 'Palette Deleted' };
// 		case PORT_DELETE_FAIL:
// 			return { loading: false, error: action.payload.error, message: action.payload.message };
// 		default:
// 			return state;
// 	}
// };

// export const portSaveReducer = (state = { port: {} }, action: { type: any; payload: any }) => {
// 	switch (action.type) {
// 		case PORT_SAVE_REQUEST:
// 			return { loading: true };
// 		case PORT_SAVE_SUCCESS:
// 			return { loading: false, success: true, port: action.payload, message: 'Palette Saved' };
// 		case PORT_SAVE_FAIL:
// 			return { loading: false, error: action.payload.error, message: action.payload.message };
// 		default:
// 			return state;
// 	}
// };
