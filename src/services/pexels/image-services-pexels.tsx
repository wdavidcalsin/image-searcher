import { PexelsRequestPhotos } from '@/request';

export const ImageServicesPexels = async (query: string) => {
  const resultImage = await PexelsRequestPhotos.get(query);

  return resultImage;
};
