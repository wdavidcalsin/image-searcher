import { useAppSelector } from '@/redux';
import { ModalMultimedia } from '@/sub-components';
import { type ISearchDataState } from '@/types';
import { sharingInformationModalService } from '@/utilities';
import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';
import { type Video, type Photo } from 'pexels';
import * as React from 'react';

const SearchResultComponent = () => {
  const { searchResult } = useAppSelector(
    (state) => state.images as ISearchDataState
  );

  const handleClickModal = (file: Photo | Video) => {
    sharingInformationModalService.setSubject({ isOpen: true, file });
  };

  return (
    <Box sx={{ bgcolor: 'secondary.main', paddingBottom: '1rem' }}>
      <Box
        sx={{
          paddingX: {
            xs: '1rem',
            sm: '1rem',
            md: '6rem',
            lg: '10rem',
          },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
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
      </Box>
      <ModalMultimedia />
    </Box>
  );
};

export default React.memo(SearchResultComponent);
