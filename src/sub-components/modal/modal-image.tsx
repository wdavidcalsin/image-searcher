import { photoDataModel } from '@/model';
import { downloadImage } from '@/services';
import { sharingInformationModalService } from '@/utilities';
import {
  Box,
  Chip,
  Modal,
  Stack,
  Typography,
  type SxProps,
} from '@mui/material';
import { type Photo } from 'pexels';
import * as React from 'react';

const style: SxProps = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxHeight: '90vh',
  bgcolor: 'secondary.main',
  borderRadius: '1rem',
  overflow: 'auto',
  boxShadow: 24,
  p: 2,
  '&::-webkit-scrollbar': {
    width: '7px',
    marginRight: '20px',
  },
  '&::-webkit-scrollbar-track': {
    bgcolor: 'primary.main',
    borderRadius: '50px',
  },
  '&::-webkit-scrollbar-thumb': {
    bgcolor: 'secondary.main',
    borderRadius: '50px',
  },
};

const ModalImage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [image, setImage] = React.useState<Photo>(photoDataModel);

  const subscription$ = sharingInformationModalService.getSubject();

  const handleClose = () => {
    sharingInformationModalService.setSubject({ isOpen: false });
  };

  const handleDownloadImage = (urlImage: string, author: string) => {
    downloadImage(urlImage, author);
  };

  React.useEffect(() => {
    subscription$.subscribe(({ isOpen, image }) => {
      setIsOpen(isOpen);

      if (image != null) setImage(image);
    });
  }, []);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
      </Box>
    </Modal>
  );
};

export default ModalImage;
