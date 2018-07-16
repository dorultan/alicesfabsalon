import {GET_ALL_SERVICES, GET_BY_CATEGORY_SERVICES, FILTER_SERVICES} from '../actions/types';


const services = (state = [], action) => {
	switch(action.type) {

		case GET_ALL_SERVICES:
		
			return action.payload.data;
		
		case GET_BY_CATEGORY_SERVICES:

			return action.payload.data;

		default: 

			return state;
	}
	return state;
}

export default services;