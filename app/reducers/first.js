const initialData = {
	 data: []
}

export default function Add(state = initialData, action){
	switch(action.type) {
		case 'cheerioSuccess': 
			return {
				...state,
				data: action.payload
				// data: Array.prototype.concat(state.data, action.payload)
			}
		default: return state;
	}
}