import { useAppSelector } from '@/redux';
import { type IImageSearchDataState } from '@/types';
import { Masonry } from '@mui/lab';
import { Box, Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SearchResultComponent = () => {
  const { searchResult } = useAppSelector(
    (state) => state.images as IImageSearchDataState
  );

  return (
    <Box>
      <Masonry columns={4} spacing={2}>
        {searchResult.photos.map((image, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
};

export default SearchResultComponent;
