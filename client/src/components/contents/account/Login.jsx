import React, { useState } from 'react'
import {  makeStyles, Container, Box, Link } from '@material-ui/core';

// alert
import { useSnackbar } from 'notistack';

// [REDUX]
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../../store/modules/account/userAction';
import { withRouter } from 'react-router-dom';

// icon
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import { ColorTextField, ColorPurpleButton, PasswordTextField } from '../../common/common';


const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '90vh',
		display: 'flex',
	},
	container: {
		textAlign: 'center',
		alignSelf: 'center',
	},
	logo: {
		color: '#000',
		fontSize: 26,
		marginBottom: '50px',
	},
	form: {

	},
	gridBox: {
    display: 'grid',
    gridTemplateColumns: '34px 244px',
    alignItems: 'end',
    justifyContent: 'center',
  },
	links: {
		width: '254px',
		display: 'inline-grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
	},
	forgotLink: {
		justifySelf: 'left',
	},
	registLink: {
		justifySelf: 'right',
	},

}));

function Login(props) {
	const classes = useStyles();

	// [REDUX]
	// const dispatch = useDispatch();

	const [UserData, setUserData] = useState({
		email: '',
		password: '',
		showPassword: false,
		status: '',
	});

	const { enqueueSnackbar } = useSnackbar();

	const onUserHandler = (event) => {
		event.preventDefault();
		
		setUserData({
			...UserData,
			[event.target.name]: event.target.value,
		})
	}

	const handleClickShowPassword = (event) => {
    event.preventDefault();
    setUserData({
      ...UserData,
      showPassword: !UserData.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

	const onSubmitHandler = (event) => {
		event.preventDefault();
		const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
		const passwordRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

		console.log('UserData', UserData);

		// 로그인 유효성 검사
		if(UserData.email === undefined || UserData.email === '' || UserData.password === undefined || UserData.password === '') { 
			enqueueSnackbar('Please write your email or password.', { variant: 'error' }); 
			return false;
		} else if(!UserData.email.match(emailRegExp) || !UserData.password.match(passwordRegExp)) {
			enqueueSnackbar('ID or password is incorrect.', { variant: 'error' });
			return false;
		} 
		
		// Server side Callback error msg 처리 필요
		// 패스워드 검증 확인

		// let body = {
		// 	email: Email,
		// 	password: Password
		// }

		// dispatch(loginUser(body)).then(response => {
		// 	if(response.payload.loginSuccess) {
		// 			// withRouter(LoginPage) 로 export 해야 아래 push 사용 가능
		// 			// react-router-dom을 이용해서 history.push를 사용하는 것임
		// 			props.history.push('/'); // 시작페이지 이동
		// 	} else {
		// 			alert('Error'); // 오류 Alert
		// 	}
		// });
	}

	return (
		<div className={classes.root}>
			<Container className={classes.container}>
				<Box component="div" m={2}>
					<Box className={classes.logo}>VIOLET LOGIN</Box>
				</Box>
				<form autoComplete="off" className={classes.form} onSubmit={onSubmitHandler}>
					<Box component="div" m={2} className={classes.gridBox}>
						<EmailIcon  />
						<ColorTextField id="email" name="email" type="email" value={UserData.email} label="Email" onChange={onUserHandler} required />
					</Box>
					<Box component="div" m={2} className={classes.gridBox}>
						<LockIcon />
						<PasswordTextField id="password" name="password" value={UserData.password} showPassword={UserData.showPassword} label="Password" onChange={onUserHandler} onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} required />
					</Box>
				</form>
				<Box component="div" m={2} className={classes.links}>
					<Link href="/pwinquiry" underline="none" className={classes.forgotLink}>Forgot Password?</Link>
					<Link href="/regist" underline="none" className={classes.registLink}>Regist</Link>
				</Box>
				<Box component="div" m={2}>
					<ColorPurpleButton type="submit" variant="outlined" size="large" color="primary" onClick={onSubmitHandler}>Login</ColorPurpleButton>
				</Box>
			</Container>
		</div>
	)
}

export default withRouter(Login);