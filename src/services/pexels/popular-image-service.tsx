import { PexelsRequest } from '@/request';

export const PopularImageService = async () => {
  const resultPopularImage = (await PexelsRequest()).photos.curated({
    per_page: 10,
  });

  return await resultPopularImage;
};
