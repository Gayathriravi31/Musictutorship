import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const CustomFormLabel = styled((props) => (
  <Typography
    variant="subtitle1"
    fontWeight={600}
    {...props}
    component="label"
    

  />
))(() => ({
  marginBottom: '5px',
  marginTop: '25px',
  display: 'block',
  textAlign:"start",
  color:'#333333',
  // fontSize:"16px",
  fontWeight:"500"
}));

export default CustomFormLabel;
