import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  commentVal: '',
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state , action) => {
      state.comments.push(action.payload);
    },
    changeCommentVal: (state, action) => {
        state.commentVal = action.payload;
    },
    deleteComment: (state, action) => {
        state.comments =
         state.comments.filter(el => el.id !== Number(action.payload));
    }
  },
});

// Action creators are generated for each case reducer function
export const { addComment, changeCommentVal, deleteComment } = commentsSlice.actions;

export default commentsSlice.reducer;
