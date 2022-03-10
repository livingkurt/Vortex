import axios from 'axios';

const client_routes = {
	get_serial_ports: () => {
		console.log('client_routes');
		return axios.get(`/api/get_serial_ports`);
	}
};

export default client_routes;
