import { downloadVideo } from '@/services';
import { type Video } from '@/types';
import { Box, Chip, Stack, Typography } from '@mui/material';
import * as React from 'react';

interface PropsModalVideo {
  video: Video;
}

const ModalContentVideo: React.FC<PropsModalVideo> = ({ video }) => {
  const handleDownloadVideo = (linkVideo: string, author: string) => {
    downloadVideo(linkVideo, author);
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
        {/* <img width={'100%'} height={'100%'} src={video.image} /> */}
        <video
          width={'100%'}
          height={'100%'}
          src={video.video_files[0].link}
          autoPlay
          loop
        ></video>
      </Box>
      <Stack spacing={2} sx={{ paddingTop: '1rem' }}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ color: 'secondary.contrastText' }}
        >
          Author : <i>{video.user.name}</i>
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ color: 'secondary.contrastText' }}
        >
          Duration : <i>{video.duration} seconds</i>
        </Typography>

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
            {video.video_files.map((itemVideo, index) => (
              <Chip
                key={index}
                label={
                  <Box sx={{ textTransform: 'uppercase' }}>{`${
                    itemVideo.quality
                  } ${itemVideo.width ?? 'N/A'} * ${
                    itemVideo.height ?? 'N/A'
                  }`}</Box>
                }
                variant="outlined"
                onClick={() => {
                  handleDownloadVideo(itemVideo.link, video.user.name);
                }}
              />
            ))}
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default ModalContentVideo;
