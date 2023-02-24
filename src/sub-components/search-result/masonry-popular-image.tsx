import { setPopularImages, useAppSelector } from '@/redux';
import { PopularImageService } from '@/services';
import { type ISearchDataState } from '@/types';
import { sharingInformationModalService } from '@/utilities';
import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';
import { type Photo } from 'pexels';
import * as React from 'react';
import { useDispatch } from 'react-redux';

const MasonryPopularImages = () => {
  const { popularImages } = useAppSelector(
    (state) => state.images as ISearchDataState
  );

  const dispatch = useDispatch();

  const handleClickModal = (file: Photo) => {
    sharingInformationModalService.setSubject({ isOpen: true, file });
  };

  React.useEffect(() => {
    const searchImages = async () => {
      const multimediaOutput = await PopularImageService();
      dispatch(setPopularImages(multimediaOutput));
    };

    void searchImages();
  }, []);

  return (
    <Masonry columns={{ xs: 1, sm: 3, md: 3, lg: 4 }} spacing={2}>
      {popularImages.photos.map((image, index) => (
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
    </Masonry>
  );
};

export default MasonryPopularImages;
