import axios from 'axios';
import {GET_ALL_SERVICES, GET_BY_CATEGORY_SERVICES, FILTER_SERVICES, GET_SERVICE_BY_NAME, MAKE_BOOKING} from './types';

const ROOT = '/api';

export const getServices = (formProps) => {
	const response = axios.get(`${ROOT}/services`);
	return {
		type: GET_ALL_SERVICES,
		payload: response
	}
};

export const getByCategory = (category) => {
	const response = axios.get(`${ROOT}/services/getByCategory`, {
		params: {
			category: category
		}
	});

	return {
		type: GET_BY_CATEGORY_SERVICES,
		payload: response
	}
}

export const getByName = (name) => {

	const response = axios.get(`${ROOT}/services/getByName`, {
		params: {
			name: name
		}
	})

	return {
		type: GET_SERVICE_BY_NAME,
		payload: response
	}
}

export const servicesFilter = (items, term) => {
	return {
		type: FILTER_SERVICES,
		payload: {
			items: items,
			term: term
		}
	}
}

export const makeBooking = (booking) => {
	booking.service.price = JSON.stringify(booking.service.price);
	const bookingInfo = {
		clientName: booking.clientName,
		bookingDate: booking.bookingDate,
		clientMobile: booking.clientMobile,
		clientEmail: booking.clientEmail,
		service: booking.service
	};

	const response = axios.post(`${ROOT}/makeBooking`, {
		bookingInfo: bookingInfo
	})

	return {
		type: MAKE_BOOKING,
		payload: response
	}
}