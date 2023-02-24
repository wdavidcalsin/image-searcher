import { useAppSelector } from '@/redux';
import { type ISearchDataState } from '@/types';
import { sharingInformationModalService } from '@/utilities';
import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';
import { type Photo, type Video } from 'pexels';

const MasonryImageAndVideo = () => {
  const { searchResult } = useAppSelector(
    (state) => state.images as ISearchDataState
  );

  const handleClickModal = (file: Photo | Video) => {
    sharingInformationModalService.setSubject({ isOpen: true, file });
  };
  return (
    <Masonry columns={{ xs: 1, sm: 3, md: 3, lg: 4 }} spacing={2}>
      {'photos' in searchResult &&
        searchResult.photos.map((image, index) => (
          <Box
            key={index}
            onClick={() => {
              handleClickModal(image);
            }}
            sx={{ cursor: 'pointer' }}
          >
            <img
              src={`${image.src.tiny}?w=162&auto=format`}
              srcSet={`${image.src.tiny}?w=162&auto=format&dpr=2 2x`}
              loading="lazy"
              style={{
                borderRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </Box>
        ))}
      {'videos' in searchResult &&
        searchResult.videos.map((video, index) => (
          <Box
            key={index}
            onClick={() => {
              handleClickModal(video);
            }}
            sx={{ cursor: 'pointer' }}
          >
            <img
              src={`${video.image}?w=162&auto=format`}
              srcSet={`${video.image}?w=162&auto=format&dpr=2 2x`}
              loading="lazy"
              style={{
                borderRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </Box>
        ))}
    </Masonry>
  );
};

export default MasonryImageAndVideo;
