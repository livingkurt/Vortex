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
	// PORT_DELETE_SUCCESS,
	// PORT_DELETE_FAIL,
	// PORT_DELETE_REQUEST,
	// MY_PORT_LIST_REQUEST,
	// MY_PORT_LIST_SUCCESS,
	// MY_PORT_LIST_FAIL
} from '../types/portTypes';
import axios from 'axios';
// import { create_query } from '../utils/helper_functions';

export const listPorts = (query: any) => async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
	try {
		dispatch({ type: PORT_LIST_REQUEST });
		// const { data } = await axios.get('/api/ports/?' + create_query(query));
		const { data } = await axios.get(`/api/get_serial_ports`);
		dispatch({ type: PORT_LIST_SUCCESS, payload: data });
	} catch (error) {
		console.log({ error });
		dispatch({ type: PORT_LIST_FAIL, payload: error });
	}
};

export const connectToPort = (path: string, connect: boolean, port: any) => async (
	dispatch: (arg0: { type: string; payload?: any }) => void
) => {
	try {
		dispatch({ type: PORT_CONNECT_REQUEST });
		if (connect) {
			const { data } = await axios.post(`/api/connect`, { path });
			console.log({ data });
			dispatch({ type: PORT_CONNECT_SUCCESS, payload: data });
		} else {
			// const { data } = await axios.post(`/api/disconnect`, { port });
			// console.log({ data });
			dispatch({ type: PORT_CONNECT_SUCCESS, payload: {} });
		}
	} catch (error) {
		console.log({ error });
		dispatch({ type: PORT_CONNECT_FAIL, payload: error });
	}
};

// export const disconnectToPort = (path: string, query: any) => async (
// 	dispatch: (arg0: { type: string; payload?: any }) => void
// ) => {
// 	try {
// 		dispatch({ type: PORT_CONNECT_REQUEST });
// 		const { data } = await axios.post(`/api/disconnect`, { path });
// 		console.log({ data });
// 		dispatch({ type: PORT_CONNECT_SUCCESS, payload: data });
// 	} catch (error) {
// 		console.log({ error });
// 		dispatch({ type: PORT_CONNECT_FAIL, payload: error });
// 	}
// };

// export const listMyPorts = () => async (
// 	dispatch: (arg0: { type: string; payload?: any }) => void,
// 	getState: () => { userLogin: { userInfo: any } }
// ) => {
// 	try {
// 		dispatch({ type: MY_PORT_LIST_REQUEST });
// 		const { userLogin: { userInfo } } = getState();
// 		const { data } = await axios.get('/api/ports/get_mine', {
// 			headers: { Authorization: 'Bearer ' + userInfo.access_token }
// 		});
// 		console.log({ listMyPorts: data });
// 		dispatch({ type: MY_PORT_LIST_SUCCESS, payload: data });
// 	} catch (error) {
// 		console.log({ error });
// 		dispatch({ type: MY_PORT_LIST_FAIL, payload: error });
// 	}
// };

// export const savePalette = (port: any) => async (
// 	dispatch: (arg0: { type: string; payload: any }) => void,
// 	getState: () => { userLogin: { userInfo: any } }
// ) => {
// 	console.log({ portActions: port });
// 	try {
// 		dispatch({ type: PORT_SAVE_REQUEST, payload: port });
// 		const { userLogin: { userInfo } } = getState();
// 		if (!port._id) {
// 			const { data } = await axios.post('/api/ports', port, {
// 				headers: {
// 					Authorization: 'Bearer ' + userInfo.access_token
// 				}
// 			});
// 			dispatch({ type: PORT_SAVE_SUCCESS, payload: data });
// 		} else {
// 			const { data } = await axios.put('/api/ports/' + port._id, port, {
// 				headers: {
// 					Authorization: 'Bearer ' + userInfo.access_token
// 				}
// 			});
// 			dispatch({ type: PORT_SAVE_SUCCESS, payload: data });
// 		}
// 	} catch (error) {
// 		console.log({ error });
// 		dispatch({ type: PORT_SAVE_FAIL, payload: error });
// 	}
// };

// export const detailsPalette = (pathname: string) => async (
// 	dispatch: (arg0: { type: string; payload: any }) => void
// ) => {
// 	try {
// 		dispatch({ type: PORT_DETAILS_REQUEST, payload: pathname });
// 		const { data } = await axios.get('/api/ports/' + pathname);
// 		dispatch({ type: PORT_DETAILS_SUCCESS, payload: data });
// 	} catch (error) {
// 		console.log({ error });
// 		dispatch({ type: PORT_DETAILS_FAIL, payload: error });
// 	}
// };

// export const deletePalette = (portId: string) => async (
// 	dispatch: (arg0: { type: string; payload: any; success?: boolean }) => void,
// 	getState: () => { userLogin: { userInfo: any } }
// ) => {
// 	try {
// 		const { userLogin: { userInfo } } = getState();
// 		dispatch({ type: PORT_DELETE_REQUEST, payload: portId });
// 		const { data } = await axios.delete('/api/ports/' + portId, {
// 			headers: {
// 				Authorization: 'Bearer ' + userInfo.access_token
// 			}
// 		});
// 		dispatch({ type: PORT_DELETE_SUCCESS, payload: data, success: true });
// 	} catch (error) {
// 		console.log({ error });
// 		dispatch({ type: PORT_DELETE_FAIL, payload: error });
// 	}
// };
