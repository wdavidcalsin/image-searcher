import { API_BASE_URL } from '@/constants';

export const PexelsRequestPhotos = {
  get: async (query: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/photos/${query}`);
      return await res.json();
    } catch (err) {
      console.log('The petition failed ', err);
    }
  },
};

export const PexelsRequestVideos = {
  get: async (query: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/videos/${query}`);
      return await res.json();
    } catch (err) {
      console.log('The petition failed ', err);
    }
  },
};

export const PexelsRequestPopularPhotos = {
  get: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/popular-photos`);
      return await res.json();
    } catch (err) {
      console.log('The petition failed ', err);
    }
  },
};
