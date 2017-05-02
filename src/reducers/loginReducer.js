import { SET_USER } from '../actions/actionTypes';

const initialState = {
  id: 0,
  username: ''
};

const loginReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_USER: return action.payload;

    default: return state;

  }
}

export default loginReducer;
