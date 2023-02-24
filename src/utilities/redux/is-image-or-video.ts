import { type PhotosWithTotalResults, type Videos } from 'pexels';

interface Props {
  searchResult: PhotosWithTotalResults | Videos;
}

export const isImageOrVideo = ({ searchResult }: Props) => {
  let isPhotoSearch = false;
  let isVideoSearch = false;

  if ('photos' in searchResult) {
    isPhotoSearch = !(searchResult.photos.length === 0);
  } else if ('videos' in searchResult) {
    isVideoSearch = !(searchResult.videos.length === 0);
  }

  return !!isPhotoSearch || !!isVideoSearch;
};
