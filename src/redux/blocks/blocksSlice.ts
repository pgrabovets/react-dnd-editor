import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { StateBlock } from "@/types/block-types";
import { v4 as uuidv4 } from "uuid";

const initialState: StateBlock[] = [];

const blockConstructorSlice = createSlice({
  name: "blocks",
  initialState: initialState,
  reducers: {
    addBlock(state, action: PayloadAction<StateBlock>) {
      state.push({
        ...action.payload,
        id: uuidv4(),
      });
    },
    changeBlock(state, action: PayloadAction<StateBlock>) {
      const index = state.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state[index] = action.payload;
    },
    moveUp(state, action: PayloadAction<number>) {
      const from: number = action.payload;
      if (from > 0) {
        const to: number = from - 1;
        const element = state.splice(from, 1)[0];
        state.splice(to, 0, element);
      }
    },
    moveDown(state, action: PayloadAction<number>) {
      const from: number = action.payload;
      if (from < state.length - 1) {
        const to: number = from + 1;
        const element = state.splice(from, 1)[0];
        state.splice(to, 0, element);
      }
    },
    copy(state, action: PayloadAction<number>) {
      const from: number = action.payload;
      const to: number = from + 1;
      const element = { ...state[from], id: uuidv4() };
      state.splice(to, 0, element);
    },
    remove(state, action: PayloadAction<number>) {
      const from: number = action.payload;
      state.splice(from, 1)[0];
    },
  },
});

export const { addBlock, changeBlock, moveUp, moveDown, copy, remove } =
  blockConstructorSlice.actions;

export default blockConstructorSlice.reducer;
