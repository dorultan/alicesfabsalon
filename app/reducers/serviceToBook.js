import {GET_SERVICE_BY_NAME} from '../actions/types';

const serviceToBook = (state = null, action) => {

	switch(action.type) {

		case GET_SERVICE_BY_NAME:

			return action.payload.data;
			
		default: 

			return state;
	}
}

export default serviceToBook;