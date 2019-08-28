import axios from 'axios';

//action type
export const GET_SINGLE_ROBOT = 'GET_SINGLE_ROBOT';

//action creator
export const getSingleRobot = robot => {
	return {
		type: GET_SINGLE_ROBOT,
		robot,
	};
};

//thunk creators

export const fetchSingleRobot = id => {
	return async dispatch => {
		try {
			console.log('API fetch request received');
			const {data} = await axios.get(`/api/robots/${id}`);
			dispatch(getSingleRobot(data));
		} catch (err) {
			console.log('Error', err);
		}
	};
};

const initialState = [];

//reducer
//our single robot state will hold only one robot at a time
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_SINGLE_ROBOT:
			return [action.robot];
		default: {
			return state;
		}
	}
};
