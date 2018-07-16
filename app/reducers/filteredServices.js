import {FILTER_SERVICES} from '../actions/types';

const filteredServices = (state = null, action) => {
	switch(action.type) {

		case FILTER_SERVICES:
			console.log(action)
			return itemsFilter(action.payload.items, action.payload.term);

		default: 

			return state;
	}
}

const itemsFilter = (items, term) => {
	console.log(items);
	return items.filter(item => {
		const itemName = item.name.toLowerCase();
		const _term = term.toLowerCase();

		return itemName.includes(_term);
	})
}

export default filteredServices;