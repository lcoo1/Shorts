import React from 'react';
import { Box, Fade, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const MainDescription = ({ description }) => {
  const stringTokenizer = (str) => {
    return str.split(' ');
  };

  return (
    <Box
      sx={{
        width: { sm: '100%', lg: '30%' },
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
      }}
    >
      {stringTokenizer(description).map((token, index) => (
        <Fade
          in
          timeout={500}
          style={{ transitionDelay: `${index * 120}ms` }}
          key={token + index}
        >
          <MainTypography
            gradient={
              index === stringTokenizer(description).length - 1
                ? 'true'
                : undefined
            }
          >
            {token}
          </MainTypography>
        </Fade>
      ))}
    </Box>
  );
};

const MainTypography = styled(Typography)(({ theme, gradient }) => ({
  ...theme.components.MuiTypography,
  fontSize: '1.5rem',
  background: gradient && theme.palette.background.homeTypoGradient,
  backgroundClip: gradient && 'text',
  WebkitBackgroundClip: gradient && 'text',
  color: gradient ? 'transparent' : theme.palette.text.mainDescription,
  fontFamily: 'Gowun Batang, serif',
}));

MainDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default MainDescription;
