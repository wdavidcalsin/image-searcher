import { type ISearchDataState } from '@/types';

export const videoDataModel: ISearchDataState = {
  searchOption: 'video',
  searchText: '',
  status: 'idle',
  searchResult: {
    total_results: 0,
    page: 0,
    per_page: 0,
    next_page: 0,
    videos: [],
  },
  popularImages: {
    total_results: 0,
    page: 0,
    per_page: 0,
    next_page: 0,
    photos: [],
  },
  isLoadingFile: false,
};
