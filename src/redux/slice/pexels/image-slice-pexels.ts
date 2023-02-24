import { imageDataModel, videoDataModel } from '@/model';
import {
  type PhotosWithTotalResults,
  type Videos,
  type ISearchDataState,
  type searchOptionType,
} from '@/types';
import { createSlice, type PayloadAction, type Slice } from '@reduxjs/toolkit';

const initialState: ISearchDataState = Object.assign(imageDataModel);

export const imageDataSlice: Slice = createSlice({
  name: 'imagesData',

  initialState,

  reducers: {
    setSearchOption(state, action: PayloadAction<searchOptionType>) {
      state.searchOption = action.payload;

      state = action.payload === 'image' ? imageDataModel : videoDataModel;
    },
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    searchLoading(state) {
      state.status = 'loading';
    },
    searchSucceeded(
      state,

      action: PayloadAction<PhotosWithTotalResults | Videos>
    ) {
      state.status = 'succeeded';

      state.searchResult = action.payload;
    },
    setPopularImages(state, action: PayloadAction<PhotosWithTotalResults>) {
      state.popularImages = action.payload;
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

  setPopularImages,

  searchFailed,
} = imageDataSlice.actions;

export default imageDataSlice.reducer;
