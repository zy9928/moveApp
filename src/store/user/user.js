import immutable from 'immutable';

const initialState = {
  userId: '',
  password: '',
};

const immutableState = immutable.fromJS(initialState);

export default function userReducer (state = immutableState, action) {
  switch (action.type) {
    default: {
      return state
    }
  }
};
