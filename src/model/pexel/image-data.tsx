import { type IImageDataState } from '@/types';

export const imageDataModel: IImageDataState = {
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
