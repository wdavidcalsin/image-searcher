import { createClient } from 'pexels';

const API_KEY = '58zVcxPOwl3KT5ZystYOY7GXq7gOU2LPe0wqt9sTkS1AljrPr0dCBHYx';

export const ImageRequestPexels = async (query: string) => {
  const clientImages = createClient(API_KEY);

  const querySearch = query;

  return await clientImages.photos.search({ query: querySearch, per_page: 10 });
};
