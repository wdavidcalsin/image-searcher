import { setIsLoadingFile, setPopularImages, useAppSelector } from '@/redux';
import { PopularImageService } from '@/services';
import { type Photo, type ISearchDataState } from '@/types';
import { sharingInformationModalService } from '@/utilities';
import { Masonry } from '@mui/lab';
import { Box, Skeleton } from '@mui/material';
import * as React from 'react';
import { useDispatch } from 'react-redux';

const MasonryPopularImages = () => {
  const { popularImages, isLoadingFile } = useAppSelector(
    (state) => state.images as ISearchDataState
  );

  const dispatch = useDispatch();

  const handleClickModal = (file: Photo) => {
    sharingInformationModalService.setSubject({ isOpen: true, file });
  };

  React.useEffect(() => {
    const searchImages = async () => {
      dispatch(setIsLoadingFile(true));

      const multimediaOutput = await PopularImageService();
      dispatch(setPopularImages(multimediaOutput));

      dispatch(setIsLoadingFile(false));
    };

    void searchImages();
  }, []);

  return (
    <Masonry columns={{ xs: 1, sm: 3, md: 3, lg: 4 }} spacing={2}>
      {isLoadingFile ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        popularImages.photos.map((image, index) => (
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
        ))
      )}
    </Masonry>
  );
};

export default MasonryPopularImages;
