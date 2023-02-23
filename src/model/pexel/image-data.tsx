import { type IImageSearchDataState } from '@/types';
import { type Photo } from 'pexels';

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

export const photoDataModel: Photo = {
  id: 0,
  width: 0,
  height: 0,
  url: '',
  alt: null,
  avg_color: null,
  photographer: '',
  photographer_url: '',
  photographer_id: '',
  liked: false,
  src: {
    original: '',
    large2x: '',
    large: '',
    medium: '',
    small: '',
    portrait: '',
    landscape: '',
    tiny: '',
  },
};
