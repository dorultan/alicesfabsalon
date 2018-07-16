import {MAKE_BOOKING} from '../actions/types';

const bookingStatus = (state = null, action) => {

	switch(action.type) {

		case MAKE_BOOKING: 
		
			return action.payload.data;

		default:

			return state;
	}
}

export default bookingStatus;