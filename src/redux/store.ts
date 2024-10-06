import { configureStore } from "@reduxjs/toolkit";
import blocksReducer from "./blocks/blocksSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      blocks: blocksReducer,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
