import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setDataAction} from '../../store/user/user'
// import { render } from 'node-sass';


const Mine = function Mine (props) {

  useEffect(() => {
    props.getCourseData();
  }, [props])
  

  return (
    <div>我的</div>
  )
};


const mapStateToProps = (state) => {
  return {
    courseData: state.courseData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCourseData(){
      let action = setDataAction();
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Mine);