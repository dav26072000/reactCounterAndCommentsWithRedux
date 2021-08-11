import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter";
import comments from "./features/comments";

export default configureStore({
  reducer: {
    counter,
    comments,
  },
});
