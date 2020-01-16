import immutable from 'immutable';
import Http from '../../util/Http';
import Api from '../../util/api';

const initialState = {
  // userId: '',
  // password: '',
  courseData: []
};

const immutableState = immutable.fromJS(initialState);

// 同步
export const setData = (val) => ({
  type: 'setDataList',
  value: val
})
// 异步
export const setDataAction = (id) => async(dispatch) => {
  let result = await Http.get(Api.ORIGINCOURSE_3);
  console.log(result);
  let action = setData(result);
  dispatch(action);
}
//http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=B95293B0384F11EA8B343537749856ED77FB6EFBB95447D68E99F50321FB7D11&optimus_risk_level=71&optimus_code=10

export default function userReducer (state = immutableState, action) {
  switch (action.type) {
    case 'setDataList':
      return {
        ...state,
        courseData: action.value
      }
    default: {
      return state;
    }
  }
};
