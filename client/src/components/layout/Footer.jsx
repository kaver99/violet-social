import React from 'react'
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import { StyleLink } from '../common/common';


const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: '1px solid rgba(0,0,0,0.08)',
    backgroundColor: 'rgba(0,0,0,0.04)',
    textAlign: 'center',
    padding: '5vh 0',
    marginTop: '20px',
  },
  title: {
    fontSize: '19px',
  }
}));

export default function Footer() {

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>VIOLET 사업자 정보</Typography>
      <Box>
        <StyleLink href="/" underline="none" color="inherit">사업자 정보 확인</StyleLink>{' | '}<StyleLink href="/" underline="none" color="inherit">VIOLET 약관</StyleLink>{' | '}<StyleLink href="/" underline="none" color="inherit">VIOLET 이용약관</StyleLink>
      </Box>
      <Box>
        <StyleLink href="/" underline="none" color="inherit">개인정보처리방침</StyleLink>{' | '}<StyleLink href="/" underline="none" color="inherit">쇼핑&페이 고객센터</StyleLink>{' | '}<StyleLink href="/" underline="none" color="inherit">VIOLET 고객센터</StyleLink>
      </Box>
      <Box>
        <StyleLink href="/" underline="none" color="inherit" className={classes.title}>VIOLET</StyleLink>
      </Box>
    </Box>
  )
}
