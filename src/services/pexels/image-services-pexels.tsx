import { ImageRequestPexels } from '@/request';

export const ImageServicesPexels = async () => {
  const resultImage = ImageRequestPexels('peru');

  return await resultImage;
};
