import { imageDataModel } from '@/model';
import { type searchOptionType, type IImageSearchDataState } from '@/types';
import { createSlice, type PayloadAction, type Slice } from '@reduxjs/toolkit';
import { type PhotosWithTotalResults } from 'pexels';

const initialState: IImageSearchDataState = Object.assign(imageDataModel);

export const imageDataSlice: Slice = createSlice({
  name: 'imagesData',
  initialState,
  reducers: {
    setSearchOption(state, action: PayloadAction<searchOptionType>) {
      state.searchOption = action.payload;
    },
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    searchLoading(state) {
      state.status = 'loading';
    },
    searchSucceeded(state, action: PayloadAction<PhotosWithTotalResults>) {
      state.status = 'succeeded';
      state.searchResult = action.payload;
    },
    searchFailed(state) {
      state.status = 'failed';
    },
  },
});

export const {
  setSearchOption,
  setSearchText,
  searchLoading,
  searchSucceeded,
  searchFailed,
} = imageDataSlice.actions;

export default imageDataSlice.reducer;
