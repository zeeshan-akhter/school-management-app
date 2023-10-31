import {configureStore} from '@reduxjs/toolkit';


import studentReducer from '../features/students/studentSlice';
import teacherSlice from '../features/teachers/teacherSlice';

export default configureStore({
  reducer:{
    students:studentReducer,
    teachers:teacherSlice
  }
})