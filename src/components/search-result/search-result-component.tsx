import { useAppSelector } from '@/redux';
import { ModalImage } from '@/sub-components';
import { type IImageSearchDataState } from '@/types';
import { sharingInformationModalService } from '@/utilities';
import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';
import { type Photo } from 'pexels';
import * as React from 'react';

const SearchResultComponent = () => {
  const { searchResult } = useAppSelector(
    (state) => state.images as IImageSearchDataState
  );

  const handleClickModal = (image: Photo) => {
    sharingInformationModalService.setSubject({ isOpen: true, image });
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
          {searchResult.photos.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                handleClickModal(image);
              }}
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
            </div>
          ))}
        </Masonry>
      </Box>
      <ModalImage />
    </Box>
  );
};

export default React.memo(SearchResultComponent);
