import { type IImageSearchDataState } from '@/types';

export const imageDataModel: IImageSearchDataState = {
  searchOption: 'image',
  searchText: '',
  status: 'idle',
  searchResult: {
    total_results: 0,
    page: 0,
    per_page: 0,
    next_page: 0,
    photos: [],
  },
};
