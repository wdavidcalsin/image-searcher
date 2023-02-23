import { imageDataModel, videoDataModel } from '@/model';
import { type searchOptionType } from '@/types';

export const generateInitialState = (
  searchOption: searchOptionType = 'image'
) => {
  return searchOption === 'image' ? imageDataModel : videoDataModel;
};
