import { PexelsRequest } from '@/request';

export const ImageServicesPexels = async (query: string) => {
  const resultImage = (await PexelsRequest()).photos.search({
    query,
    per_page: 10,
  });

  return await resultImage;
};
