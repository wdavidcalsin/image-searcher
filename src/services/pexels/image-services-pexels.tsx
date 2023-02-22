import { ImageRequestPexels } from '@/request';

export const ImageServicesPexels = async (query: string) => {
  const resultImage = ImageRequestPexels(query);

  return await resultImage;
};
