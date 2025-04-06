import React, { useState } from 'react';
import { Grid, Card, CardMedia, IconButton, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import course_4 from "../assets/images/spakers.png";

const images = [
  course_4,
  course_4,
  course_4,
  course_4,
];

const videos = [
  'https://www.youtube.com/shorts/PAR3llXALyI',
  'https://www.youtube.com/shorts/PAR3llXALyI',
  'https://www.youtube.com/shorts/PAR3llXALyI',
  'https://www.youtube.com/shorts/PAR3llXALyI',
 
];

function ShortsGrid() {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={image}
              alt={`Short ${index + 1}`}
              sx={{ objectFit: 'cover' }}
            />
            {index === 2 && (
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              >
                <IconButton color="primary" size="large" onClick={() => setPlayingVideo(videos[index])}>
                  <PlayArrowIcon style={{ fontSize: 60 }} />
                </IconButton>
              </Box>
            )}
          </Card>
        </Grid>
      ))}
      {playingVideo && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgcolor="rgba(0, 0, 0, 0.9)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex={1000}
        >
          <video src={playingVideo} controls autoPlay style={{ maxWidth: '90%', maxHeight: '90%' }} />
          <IconButton
            onClick={() => setPlayingVideo(null)}
            style={{ position: 'absolute', top: 20, right: 20, color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </Grid>
  );
}

export default ShortsGrid;