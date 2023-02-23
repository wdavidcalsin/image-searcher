import { API_KEY } from '@/constants';
import { createClient } from 'pexels';

export const PexelsRequest = async () => {
  const clientImages = createClient(API_KEY);

  return clientImages;
};
