import { type IImageDataState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IImageDataState[] = [];

export const imageDataSlice = createSlice({
  name: 'imagesData',
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setImages } = imageDataSlice.actions;

export default imageDataSlice.reducer;
