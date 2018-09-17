import * as types from '../constants/actions';

const initialState = {
  interestData: [],
};

const handleResponse = (response) => {
  switch (response.type) {
    case 'get_trends_data': {

      console.log("RECEIVED", response.data)
      return { interestData: response.data };
    }
    default:
      return {};
  }
};

const example = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.BROADCAST_MESSAGE_UPDATE: {
      return { ...state, broadcastMessage: action.message };
    }
    case types.RECEIVE_RESPONSE: {
      return { ...state, ...handleResponse(action.response) };
    }
    default:
      return state;
  }
};

export default example;
