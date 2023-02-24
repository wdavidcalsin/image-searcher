import { downloadImage } from '@/services';
import { type Photo } from '@/types';
import { Box, Chip, Stack, Typography } from '@mui/material';
import * as React from 'react';

interface PropsModalImage {
  image: Photo;
}

const ModalContentImage: React.FC<PropsModalImage> = ({ image }) => {
  const handleDownloadImage = (urlImage: string, author: string) => {
    downloadImage(urlImage, author);
  };

  return (
    <>
      <Box
        sx={{
          borderTopLeftRadius: '.5rem',
          borderTopRightRadius: '.5rem',
          overflow: 'hidden',
        }}
      >
        <img width={'100%'} height={'100%'} src={image.src.original} />
      </Box>
      <Stack spacing={2} sx={{ paddingTop: '1rem' }}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ color: 'secondary.contrastText' }}
        >
          Author : <i>{image.photographer}</i>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: 'secondary.contrastText' }}
          >
            Average Color:{' '}
          </Typography>
          <Box
            sx={{
              bgcolor: image.avg_color,
              width: '2rem',
              height: '2rem',
              borderRadius: '.5rem',
            }}
          ></Box>
        </Box>
        <Stack
          spacing={'1rem'}
          sx={{
            bgcolor: 'rgba(0,0,0, .1)',
            borderRadius: '.5rem',
            padding: '1rem',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              color: 'secondary.contrastText',
            }}
          >
            Download
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
            {Object.entries(image.src).map(([properties, link], index) => (
              <Chip
                key={index}
                label={properties}
                variant="outlined"
                onClick={() => {
                  handleDownloadImage(link, image.photographer);
                }}
              />
            ))}
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default ModalContentImage;
