import {combineReducers} from 'redux';
import services from './services';
import filteredServices from './filteredServices';
import serviceToBook from './serviceToBook';
import {reducer as formProps} from 'redux-form';
import bookingStatus from './bookingStatus';
import {MAKE_BOOKING} from '../actions/types';

const rootReducer = combineReducers({
	services: services,
	filteredServices: filteredServices,
	serviceToBook: serviceToBook,
	form: formProps.plugin({
		bookForm: (state, action) => {

			switch(action.type) {

				case MAKE_BOOKING:

					return undefined;

				default:

					return state;
			}
		}
	}),
	bookingStatus: bookingStatus
})

export default rootReducer;