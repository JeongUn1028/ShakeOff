import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const authSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    sampleAction(state, action) {},
  },
});

export const { sampleAction } = authSlice.actions;
export default authSlice.reducer;
