import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  step: 1,
  max: 100,
  min: -10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if(state.value + state.step < state.max) {
        state.value += state.step;
      }else {
        state.value = state.max
      };
    },
    decrement: (state) => {
      if(state.value - state.step > state.min) {
        state.value -= state.step;
      }else {
        state.value = state.min
      };
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    changeStep : (state, action) => {
      state.step = action.payload    
    },
    changeMax : (state, action) => {
      state.max = action.payload;
    },
    changeMin : (state, action) => {
      state.min = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, changeStep, changeMax, changeMin } = counterSlice.actions;

export default counterSlice.reducer;
