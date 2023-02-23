import { photoDataModel } from '@/model';
import { sharingInformationModalService } from '@/utilities';
import { Modal, Box, Typography, type SxProps } from '@mui/material';
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Author : <i>{image.photographer}</i>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalImage;
