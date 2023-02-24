import { useAppSelector } from '@/redux';
import {
  MasonryImageAndVideo,
  MasonryPopularImages,
  ModalMultimedia,
} from '@/sub-components';
import { type ISearchDataState } from '@/types';
import { isImageOrVideo } from '@/utilities';
import { Box } from '@mui/material';
import * as React from 'react';

const SearchResultComponent = () => {
  const { searchResult } = useAppSelector(
    (state) => state.images as ISearchDataState
  );

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
        {isImageOrVideo({ searchResult }) ? (
          <MasonryImageAndVideo />
        ) : (
          <MasonryPopularImages />
        )}
      </Box>
      <ModalMultimedia />
    </Box>
  );
};

export default React.memo(SearchResultComponent);
