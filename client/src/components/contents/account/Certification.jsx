import React from 'react'
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import { StyleIconButton } from '../../common/common';


const useStyles = makeStyles((theme) => ({
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  styleIconBtnEmail: {
    marginRight: '5px',
    width: '144px',
    height: '144px',
    color: '#fff',
    backgroundColor: '#ff595e',
    '&:hover': {
      backgroundColor: '#ff193e',
			'& .MuiSvgIcon-root': {
        color: '#fff',
			},
		},
  },
  styleIconBtnPhone: {
    marginLeft: '5px',
    width: '144px',
    height: '144px',
    color: '#fff',
    backgroundColor: '#1982c4',
    '&:hover': {
      backgroundColor: '#1952b5',
			'& .MuiSvgIcon-root': {
        color: '#fff',
			},
		},
  },
  icon: {
    width: '32px',
    height: '32px',
  }
}))

export default function Certification() {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Typography variant="subtitle1">편리한 회원가입을 위해 고객님께서 원하시는 인증방법을 선택해 주세요.</Typography>
        <Typography variant="subtitle2">[ 휴대폰 인증 서비스는 현재 PG사 가입이 원활하지 않아 사용 불가 ]</Typography>
        <Box className={classes.btnContainer}>
          <StyleIconButton href="/cert/email" className={classes.styleIconBtnEmail}>
            <EmailIcon className={classes.icon} />
            <Typography>EMAIL</Typography>
          </StyleIconButton>
          <StyleIconButton href="/cert/phone" className={classes.styleIconBtnPhone}>
            <PhoneIcon className={classes.icon} />
            <Typography>PHONE</Typography>
          </StyleIconButton>
        </Box>
      </Container>
    </Box>
  )
}
