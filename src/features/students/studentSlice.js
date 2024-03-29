import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axios from "axios";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(
      "https://148ab4d9-4f00-4906-b5b1-5da8155a2524-00-669v4x3bxj9d.picard.replit.dev/student"
    );
    return response?.data?.data;
  }
);

export const addStudentData = createAsyncThunk(
  "students/addStudentData",
  async (studentData) => {
    console.log({ studentData });
    const response = await axios.post(
      "https://148ab4d9-4f00-4906-b5b1-5da8155a2524-00-669v4x3bxj9d.picard.replit.dev/student",
      studentData
    );
    toast.success(response?.data?.message ?? "Success");
    return response.data.data;
  }
);

export const deleteStudentData = createAsyncThunk(
  "students/deleteStudentData",
  async (studentId) => {
    const response = await axios.delete(
      `https://148ab4d9-4f00-4906-b5b1-5da8155a2524-00-669v4x3bxj9d.picard.replit.dev/student/${studentId}`
    );
    toast.success(response?.data?.message ?? "Success");
    return response.data.data;
  }
);
export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async (payload) => {
    const { id, formData } = payload;
    const response = await axios.post(
      `https://148ab4d9-4f00-4906-b5b1-5da8155a2524-00-669v4x3bxj9d.picard.replit.dev/student/${id}`,
      formData
    );
    toast.success(response?.data?.message ?? "Success");
    return response.data.data;
  }
);
export const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    error: null,
    status: "idle",
  },
  reducers: {},

  extraReducers: {
    [fetchStudents.fulfilled]: (state, action) => {
      state.students = action.payload;
      state.status = "success";
    },
    [fetchStudents.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [fetchStudents.pending]: (state) => {
      state.status = "loading";
    },
    [addStudentData.fulfilled]: (state, action) => {
      state.students = [action.payload, ...state.students];
      state.status = "success";
    },
    [addStudentData.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [addStudentData.pending]: (state) => {
      state.status = "loading";
    },
    [deleteStudentData.fulfilled]: (state, action) => {
      state.students = action.payload;
      state.status = "success";
    },
    [deleteStudentData.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deleteStudentData.pending]: (state) => {
      state.status = "loading";
    },
    [updateStudent.fulfilled]: (state, action) => {
      state.students = action.payload;
      state.status = "success";
    },
    [updateStudent.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [updateStudent.pending]: (state) => {
      state.status = "loading";
    },
  },
});
export default studentSlice.reducer;
