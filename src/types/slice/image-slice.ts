import { type Videos, type PhotosWithTotalResults } from 'pexels';

export type searchOptionType = 'image' | 'video';
export type statusType = 'idle' | 'loading' | 'success' | 'failed';

export interface ISearchDataState {
  searchOption: searchOptionType;
  searchText: string;
  status: statusType;
  searchResult: PhotosWithTotalResults | Videos;
  popularImages: PhotosWithTotalResults;
}
