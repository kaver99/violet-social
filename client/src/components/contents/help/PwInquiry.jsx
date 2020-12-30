import React from 'react'

import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

import { StyleIconButton } from '../../common/common';

// IconComponent
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';


const useStyles = makeStyles((theme) => ({
  
  root: {
    flexFlow: 2,
    padding: '0, 20px',
  	minHeight: '90vh',
		display: 'flex',
	},
	container: {
		textAlign: 'center',
		alignSelf: 'center',
	},
  btnContainer: {
    textAlign: 'center',
  },
  logo: {
		color: '#000',
		fontSize: 26,
		marginBottom: '50px',
	},
  styleIconBtn: {
    marginRight: '5px',
    width: '144px',
    height: '144px',
    color: '#fff',
    // backgroundColor: '#ff595e',
    '&:hover': {
      // backgroundColor: '#ff193e',
			'& .MuiSvgIcon-root': {
        color: '#fff',
			},
		},
  },
  BtnId: {
    backgroundColor: '#ff595e',
    '&:hover': {
      backgroundColor: '#ff193e',
    },
  },
  BtnPassword: {
    backgroundColor: '#1982c4',
    '&:hover': {
      backgroundColor: '#1952b5',
    },
  },
}));

export default function PwInquiry() {
  const classes = useStyles();

	return (
		<Box className={classes.root}>
      <Container className={classes.container}>
				<Box component="div" m={2}>
					<Box className={classes.logo}>ID / Password Inquiry</Box>
				</Box>
        <Box className={classes.btnContainer}>
          <StyleIconButton href="/pwinquiry/id" className={classNames(classes.styleIconBtn, classes.BtnId)}>
            <EmailIcon className={classes.icon} />
            <Typography>ID</Typography>
          </StyleIconButton>
          <StyleIconButton href="/pwinquiry/password" className={classNames(classes.styleIconBtn, classes.BtnPassword)}>
            <LockIcon className={classes.icon} />
            <Typography>Password</Typography>
          </StyleIconButton>
        </Box>
      </Container>
		</Box>
	)
}
