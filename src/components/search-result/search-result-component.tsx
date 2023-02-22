import { useAppSelector } from '@/redux';
import { type IImageSearchDataState } from '@/types';
import { Masonry } from '@mui/lab';
import { Box, Paper, styled, Typography } from '@mui/material';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
}));

const SearchResultComponent = () => {
  const { searchResult } = useAppSelector(
    (state) => state.images as IImageSearchDataState
  );

  return (
    <Box sx={{ bgcolor: 'secondary.main' }}>
      <Box
        sx={{
          paddingX: {
            xs: '1rem',
            sm: '1rem',
            md: '10rem',
            lg: '10rem',
          },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Masonry columns={4} spacing={2}>
          {searchResult.photos.map((image, index) => (
            <div key={index}>
              <img
                src={`${image.src.small}?w=162&auto=format`}
                srcSet={`${image.src.small}?w=162&auto=format&dpr=2 2x`}
                loading="lazy"
                style={{
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
              />
              <Label>
                <Typography
                  variant="h2"
                  sx={{ fontSize: '1rem', fontWeight: 'bold' }}
                >
                  Author:
                  <i> {image.photographer}</i>
                </Typography>
              </Label>
            </div>
          ))}
        </Masonry>
      </Box>
    </Box>
  );
};

export default SearchResultComponent;
