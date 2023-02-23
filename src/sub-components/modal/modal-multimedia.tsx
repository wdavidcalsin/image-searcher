import { photoDataModel } from '@/model';
import { sharingInformationModalService } from '@/utilities';
import { Box, Modal, type SxProps } from '@mui/material';
import { type Photo, type Video } from 'pexels';
import * as React from 'react';
import ModalContentImage from './modal-content-image';
import ModalContentVideo from './modal-content-video';

const style: SxProps = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: 300,
    sm: 300,
    md: 500,
    lg: 500,
  },
  maxHeight: '90vh',
  bgcolor: 'secondary.main',
  borderRadius: '.5rem',
  overflow: 'hidden',
  boxShadow: 24,
  padding: '.3rem',
};

const ModalImage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [fileState, setFileState] = React.useState<Photo | Video>(
    photoDataModel
  );

  const subscription$ = sharingInformationModalService.getSubject();

  const handleClose = () => {
    sharingInformationModalService.setSubject({ isOpen: false });
  };

  React.useEffect(() => {
    subscription$.subscribe(({ isOpen, file }) => {
      setIsOpen(isOpen);

      if (file != null) setFileState(file);
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
            position: 'relative',
            maxHeight: '85vh',
            overflow: 'auto',
            top: '0px',
            right: '0px',
            left: '0px',
            bottom: '0px',
            padding: '.3rem',

            '&::-webkit-scrollbar': {
              width: '7px',
            },
            '&::-webkit-scrollbar-track': {
              bgcolor: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: 'primary.main',
              borderRadius: '50px',
            },
          }}
        >
          {'src' in fileState && <ModalContentImage image={fileState} />}
          {'video_files' in fileState && <ModalContentVideo video={fileState} />}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalImage;
