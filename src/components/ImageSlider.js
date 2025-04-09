import React, { useState, useEffect } from 'react';
import { IconButton, Box, useMediaQuery, useTheme } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const ImageSlider = ({ images }) => {
    const theme = useTheme();

    // Responsive breakpoints
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    const [visibleCount, setVisibleCount] = useState(5);
    const [heightMap, setHeightMap] = useState([360, 400, 450, 400, 360]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isXs) {
            setVisibleCount(1);
            setHeightMap([450]);
        } else if (isSm) {
            setVisibleCount(3);
            setHeightMap([400, 450, 400]);
        } else {
            setVisibleCount(5);
            setHeightMap([360, 400, 450, 400, 360]);
        }
    }, [isXs, isSm, isMdUp]);

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (currentIndex < images.length - visibleCount) setCurrentIndex(currentIndex + 1);
    };

    const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

    return (
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ gap: 2, overflow: 'hidden', padding: 2 }}>
            <IconButton onClick={handlePrev} sx={{
                background: 'white', boxShadow: 2,
                "&:focus, &:active": { outline: "none", boxShadow: "none" },
            }}>
                <ArrowBackIos style={{ fontSize: '22px' }} />
            </IconButton>

            <Box
                display="flex"
                gap={3}
                sx={{
                    maxWidth: '100%',
                    overflow: 'hidden',
                    alignItems: "center"
                }}
            >
                {visibleImages.map((item, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            width: '230px',
                            height: `${heightMap[idx]}px`,
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: 1,
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        {item.type === 'image' ? (
                            <img
                                src={item.src}
                                alt={`Slide ${idx}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        ) : (
                            <video
                                src={item.src}
                                controls
                                muted
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    backgroundColor: '#000'
                                }}
                            />
                        )}
                    </Box>
                ))}
            </Box>

            <IconButton onClick={handleNext} sx={{
                background: 'white', boxShadow: 2,
                "&:focus, &:active": { outline: "none" },
            }}>
                <ArrowForwardIos style={{ fontSize: '22px' }} />
            </IconButton>
        </Box>
    );
};

export default ImageSlider;
