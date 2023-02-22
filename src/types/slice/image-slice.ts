import { type PhotosWithTotalResults } from 'pexels';

export type searchOptionType = 'image' | 'video';
export type statusType = 'idle' | 'loading' | 'success' | 'failed';

export interface IImageSearchDataState {
  searchOption: searchOptionType;
  searchText: string;
  status: statusType;
  searchResult: PhotosWithTotalResults;
}
