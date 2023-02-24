import { PexelsRequestPopularPhotos } from '@/request';

export const PopularImageService = async () => {
  const resultPopularImage = await PexelsRequestPopularPhotos.get();

  return resultPopularImage;
};
