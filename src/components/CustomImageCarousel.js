import React, { useEffect, useState } from 'react';
import { Box, CardMedia, Stack, useTheme, useMediaQuery } from '@mui/material';

const CustomImageCarousel = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [thumbImages, setThumbImages] = useState(images.slice(1));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // sm = 600px

  useEffect(() => {
    const interval = setInterval(() => {
      rotateImages();
    }, 7000);

    return () => clearInterval(interval);
  }, [mainImage, thumbImages]);

  const rotateImages = () => {
    const updatedThumbs = [...thumbImages, mainImage];
    const nextMain = updatedThumbs.shift();
    setMainImage(nextMain);
    setThumbImages(updatedThumbs);
  };

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Box sx={{ width: '90%', mx: 'auto', px: 2,py:1,borderRadius:'10px' }}>
      {/* Main Image */}
      <CardMedia
        component="img"
        image={mainImage.src}
        alt="Main"
        onClick={() => openLink(mainImage.to)}
        sx={{
          width: '100%',
          height: { xs: '200px', sm: '300px', md: '409px' },
          objectFit: 'cover',
          borderRadius: 2,
          cursor: 'pointer',
          transition: '0.3s ease-in-out',
        }}
      />

      {/* Thumbnails */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mt: 3,
          overflowX: 'auto',
          justifyContent: 'flex-start',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {thumbImages.map((img, index) => (
          <CardMedia
            key={index}
            component="img"
            image={img.src}
            alt={`Thumbnail ${index}`}
            onClick={() => openLink(img.to)}
            sx={{
              width: { xs: '120px', sm: '180px', md: '258px' },
              height: { xs: '80px', sm: '110px', md: '148px' },
              objectFit: 'cover',
              borderRadius: 1.5,
              flexShrink: 0,
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default CustomImageCarousel;
