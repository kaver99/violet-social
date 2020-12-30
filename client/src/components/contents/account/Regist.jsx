import React, { useState } from 'react';
import { Stepper, Box, Step, StepLabel, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { makeStyles, Container } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import Certification from './Certification';
import Agreement from './Agreement';
import UserDetails from './UserDetails';


const useStyles = makeStyles((theme) => ({
	root: {
		// minHeight: '90vh',
		display: 'flex',
	},
	container: {
		textAlign: 'center',
		alignSelf: 'center',
	},
	logo: {
		padding: '60px 0',
		color: '#000',
		fontSize: 24,
	},
	stepper: {
		height: '20vh',
		padding: '20px 0',
		backgroundColor: '#FAFAFA',
		'& .MuiStepIcon-root.MuiStepIcon-active': {
			width: '40px',
			height: '40px',
			color: purple[500],
		},
		'& .MuiStepIcon-root.MuiStepIcon-completed': {
			color: purple[500],
		},
	},
	regContent: {
		padding: '20px 0',
	},
	regFooter: {
		height: '10vh',
		marginTop: '20px',
		justifyContent: 'space-between',
	},
  backButton: {
		float: 'left',
		width: '128px',
  },
	nextButton: {
		float: 'right',
		width: '128px',
		backgroundColor: purple[500],
		color: '#fff',
		'&:hover': {
			backgroundColor: purple[600],
		}
	}
}));

// Step Header Name
function getSteps() {
  return ['Certification', 'Agreement', 'User Details'];
}

// Step Content Component
function getStepContent(stepIndex, submitData, setSubmitData) {
  switch (stepIndex) {
    case 0:
      return <Certification submitData={submitData} setSubmitData={setSubmitData} />;
    case 1:
      return <Agreement submitData={submitData} setSubmitData={setSubmitData} />;
    case 2:
      return <UserDetails submitData={submitData} setSubmitData={setSubmitData} />;
    default:
      return 'Not Found Step';
  }
}

function stepValidMsg(activeStep, submitData) {
	let errorMsg = '';
	switch (activeStep) {
		case 0:
			return errorMsg;
		case 1:
			if(submitData.termsagree === false) errorMsg = 'Please check the terms and conditions agreement information.';
			else if(submitData.personalagree === false) errorMsg = 'Please check the information on the collection and use of personal information.';
			else errorMsg = '';
			return errorMsg;
		case 2:
			if(submitData.validMsg !== '') {
				errorMsg = submitData.validMsg;
			} else {
				if(submitData.email === '') errorMsg = 'Please enter your email.';
				else if(submitData.password === '') errorMsg = 'Please enter your password.';
				else if(submitData.passwordConfirm === '') errorMsg = 'Please enter your password Confirm.';
				else if(submitData.name === '') errorMsg = 'Please enter your name.';
				else if(submitData.birthday === '') errorMsg = 'Please enter your birthday.';
				else if(submitData.phone === '') errorMsg = 'Please enter your phone.';
				else if(submitData.telecom === '') errorMsg = 'Please select a carrier.';
				else if(submitData.zipcode === '') errorMsg = 'Please enter your zipcode';
				else if(submitData.address === '') errorMsg = 'Please enter your address';
				else if(submitData.subAddress === '') errorMsg = 'Please enter your sub address';
				else errorMsg = '';
			}
			return errorMsg;
		default:
			return errorMsg;
	}
}

export default function Regist() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();
	const [submitData, setSubmitData] = useState({
		allChecked: false,              // 전체 약관 동의
		termsagree: false,	            // 이용 약관 동의
    personalagree: false,           // 개인정보 수집 및 이용에 대한 안내
    eventagree: false,              // 프로모션 안내 메일 수신
		email: '',                      // 이메일
    password: '',                   // 패스워드
		passwordConfirm: '',            // 패스워드 확인
    name: '',                       // 이름
    birthday: '',                   // 생년월일
    phone: '',                      // 휴대폰 번호
    numberformat: '1320',           // 휴대폰 넘버 포멧
    telecom: 'Telecom',             // 통신사
    zipcode: '',                    // 우편번호
    address: '',                    // 주소
    subAddress: '',                 // 상세주소
    // validation checked
    validEmail: false,              // 이메일 체크 결과
    validPassword: false,           // 패스워드 체크 결과
    validPasswordConfirm: false,    // 패스워드 확인 체크 결과
    validName: false,               // 이름 체크 결과
    validBirthday: false,           // 생년월일 체크 결과
    validPhone: false,              // 휴대폰 번호 체크 결과
    validTelecom: false,            // 통신사 체크 결과
    validZipcode: false,            // 우편 번호 체크 결과
    validAddress: false,            // 주소 체크 결과
    validSubAddress: false,         // 상세 주소 체크 결과
    validMsg: '',                   // 에러 메시지
	});

	// action Snackbar
	const { enqueueSnackbar } = useSnackbar();

  const handleNext = ((event) => {
		event.preventDefault();
		let errMsg = '';
		errMsg = stepValidMsg(activeStep, submitData);
		if(errMsg !== '') {
			enqueueSnackbar(errMsg, { variant: 'error' });
			return false;
		}
		(activeStep === 2) ? onSubmitHandler(event) : setActiveStep((prevActiveStep) => prevActiveStep + 1);
  });

  const handleBack = ((event) => {
		event.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
	});

	const onSubmitHandler = ((event) => {
		event.preventDefault();
		//activeStep === steps.length - 1 ? 
		console.log('submitData', submitData);
	});

	return (
		<Box className={classes.root}>
			<Container className={classes.container}>
				<Box className={classes.logo}>
					Regist User
				</Box>
				<Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<Box className={classes.regContent}>
					<form autoComplete="off" className={classes.form} onSubmit={onSubmitHandler}>
						{ getStepContent(activeStep, submitData, setSubmitData) }
					</form>
				</Box>
				<Box className={classes.regFooter}>
					<Button disabled={activeStep === 0} onClick={(e) => handleBack(e)} className={classes.backButton}>
						Back
					</Button>
					<Button variant="contained" onClick={(e) => handleNext(e)} className={classes.nextButton}>
						{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
					</Button>
				</Box>
			</Container>
		</Box>
	)
}
