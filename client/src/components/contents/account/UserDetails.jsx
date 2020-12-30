import React, { useState } from 'react'

import { Box, Container, Typography, Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

// icon
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CakeIcon from '@material-ui/icons/Cake';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

import Postcode from './DaumZipCode';
import { ColorPurpleButton, ColorTextField, PasswordTextField, MaskTextField, TelecomSelect } from '../../common/common';


const useStyles = makeStyles((theme) => ({
  avatarBox: {
    display: 'inline-block',
    alignContent: 'center',
    margin: '30px 0 0 0',
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  gridBox: {
    display: 'grid',
    gridTemplateColumns: '34px 244px',
    alignItems: 'end',
    justifyContent: 'center',
  },
  gridBox2: {
    display: 'grid',
    gridTemplateColumns: '34px 140px 100px',
    alignItems: 'end',
    justifyContent: 'center',
  },
  marginHr: {
    margin: '40px 0 20px 0',
  },
  phone: {
    width: '135px',
  },
  zipcode: {
    width: '135px',
  },
  searchbtn: {
    width: '100px',
  },
}))


export default function UserDetails(props) {
  const classes = useStyles();
  const { submitData, setSubmitData } = props;

  const inputDataHandler = (event) => {
    event.preventDefault();

    if(event.target.name === 'email') {
      const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

      if(event.target.value !== '' && event.target.value.match(emailRegExp)) {
        setSubmitData({
          ...submitData,
          email: event.target.value,
          validEmail: false,
          validMsg: '',
        });
      } else {
        setSubmitData({
          ...submitData,
          email: event.target.value,
          validEmail: true,
          validMsg: 'Please fill out according to the email format.',
        });
        // console.log('error: email input Error');
      }
    } else if(event.target.name === 'password') {
      const passwordRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

      if(event.target.value !== '' && event.target.value.match(passwordRegExp)) {
        setSubmitData({
          ...submitData,
          password: event.target.value,
          validPassword: false,
          validMsg: '',
        });
      } else {
        setSubmitData({
          ...submitData,
          password: event.target.value,
          validPassword: true,
          validMsg: 'Please fill out according to the password format.',
        });
        // console.log('error: password input Error');
      }
    } else if(event.target.name === 'passwordConfirm') {
      const passwordRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

      if(event.target.value !== '' && event.target.value.match(passwordRegExp) && event.target.value === submitData.password) {
        setSubmitData({
          ...submitData,
          passwordConfirm: event.target.value,
          validPasswordConfirm: false,
          validMsg: '',
        });
      } else {
        setSubmitData({
          ...submitData,
          passwordConfirm: event.target.value,
          validPasswordConfirm: true,
          validMsg: 'Please fill in the same as the password.',
        });
        // console.log('error: password Confirm input Error');
      }
    } else if(event.target.name === 'name') {
      if(event.target.value !== '' && event.target.value.length > 1) {
        setSubmitData({
          ...submitData,
          name: event.target.value,
          validName: false,
          validMsg: '',
        });
      } else {
        setSubmitData({
          ...submitData,
          name: event.target.value,
          validName: true,
          validMsg: 'Please write your name at least two letters.',
        });
        // console.log('error: name input Error');
      }
    } else if(event.target.name === 'birthday') {
      //const passwordRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

      //if(event.target.value !== '' && event.target.value.match(passwordRegExp) && InputData.password === event.target.value) {
      if(event.target.value !== '') {
        setSubmitData({
          ...submitData,
          birthday: event.target.value,
          validBirthday: false,
          validMsg: '',
        });
      } else {
        setSubmitData({
          ...submitData,
          birthday: event.target.value,
          validBirthday: true,
          validMsg: 'Please write your date of birth.',
        });
        // console.log('error: birthday input Error');
      }
      
    } else if(event.target.name === 'phone') {
      //const passwordRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

      //if(event.target.value !== '' && event.target.value.match(passwordRegExp) && InputData.password === event.target.value) {
        if(event.target.value !== '') {
          setSubmitData({
            ...submitData,
            phone: event.target.value,
            validPhone: false,
            validMsg: '',
          });
        } else {
          setSubmitData({
            ...submitData,
            phone: event.target.value,
            validPhone: true,
            validMsg: 'Please write your mobile phone number.',
          });
          // console.log('error: phone input Error');
        }
    } else if(event.target.name === 'telecom') {
      //const passwordRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

      //if(event.target.value !== '' && event.target.value.match(passwordRegExp) && InputData.password === event.target.value) {
        if(event.target.value !== '') {
          setSubmitData({
            ...submitData,
            telecom: event.target.value,
            validTelecom: false,
            validMsg: '',
          });
        } else {
          setSubmitData({
            ...submitData,
            telecom: event.target.value,
            validTelecom: true,
            validMsg: 'Please choose the right carrier.',
          });
          // console.log('error: telecom input Error');
        }
    } else if(event.target.name === 'zipcode') {
      //const passwordRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

      //if(event.target.value !== '' && event.target.value.match(passwordRegExp) && InputData.password === event.target.value) {
        if(event.target.value !== '') {
          setSubmitData({
            ...submitData,
            zipcode: event.target.value,
            validZipcode: false,
            validMsg: '',
          });
        } else {
          setSubmitData({
            ...submitData,
            zipcode: event.target.value,
            validZipcode: true,
            validMsg: 'Please search for the correct zip code.',
          });
          // console.log('error: zipcode input Error');
        }
    } else if(event.target.name === 'address') {
      
      if(event.target.value !== '') {
        setSubmitData({
          ...submitData,
          address: event.target.value,
          validAddress: false,
          validMsg: '',
        });
      } else {
        setSubmitData({
          ...submitData,
          address: event.target.value,
          validAddress: true,
          validMsg: 'Please search for the correct address.',
        });
        // console.log('error: address input Error');
      }
      
    } else if(event.target.name === 'subaddress') {
      
      if(event.target.value !== '') {
        setSubmitData({
          ...submitData,
          subAddress: event.target.value,
          validSubAddress: false,
          validMsg: '',
        });
      } else {
        setSubmitData({
          ...submitData,
          subAddress: event.target.value,
          validSubAddress: true,
          validMsg: 'Please fill in the correct sub address.',
        });
        // console.log('error: subaddress input Error');
      }
    } else {
      setSubmitData({
        ...submitData,
        validMsg: 'An error occurred on the page.',
      });
    }
  };

  const [showPassword, setShowPassword] = useState({
    password: false,
    passwordConfirm: false,
  });

  const handleClickShowPassword = (event, id) => {
    event.preventDefault();

    setShowPassword({
      ...showPassword,
      [id]: (id === 'password') ? !showPassword.password : !showPassword.passwordConfirm,
    });
  };

  // const handleClickShowPasswordConfirm = (event, id) => {
  //   event.preventDefault();
  //   setShowPassword({
  //     ...showPassword,
  //     passwordConfirm: !showPassword.passwordConfirm,
  //   })
  // };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = useState(false);

  const handleOpen = (() => {
    // event.preventDefault();
    setOpen(true);
  });

  const handleClose = (() => {
    // event.preventDefault();
    setOpen(false);
  });

  return (
    <Box>
      <Container>
        <Typography variant="subtitle1">Violet eCommers 서비스를 이용하기 위해 고객님의 정보를 입력해 주세요.</Typography>
        <Typography variant="subtitle2">입력하신 정보는 Violet 서비스를 이용하기 위한 용도로만 사용이 됩니다.</Typography>
        <Box component="div" m={2} className={classes.avatarBox}>
          <Avatar alt="Avatar" src="/static/images/profile/avatar.jpg" className={classes.avatar} />
        </Box>
        <Box component="div" m={2} className={classes.gridBox}>
          <EmailIcon  />
          <ColorTextField id="email" name="email" type="email" value={submitData.email} label="Email" onChange={inputDataHandler} error={submitData.validEmail} helperText="" required />
        </Box>
        <Box component="div" m={2} className={classes.gridBox}>
          <LockIcon />
          <PasswordTextField id="password" name="password" value={submitData.password} showPassword={showPassword.password} label="Password" onChange={inputDataHandler} error={submitData.validPassword} onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} required />
        </Box>
        <Box component="div" m={2} className={classes.gridBox}>
          <LockIcon />
          <PasswordTextField id="passwordConfirm" name="passwordConfirm" value={submitData.passwordConfirm} showPassword={showPassword.passwordConfirm} label="Password Confirm" onChange={inputDataHandler}  error={submitData.validPasswordConfirm} onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} required />
        </Box>
        <hr className={classes.marginHr} />
        <Box component="div" m={2} className={classes.gridBox}>
          <AccountBoxIcon />
          <ColorTextField id="name" name="name" type="text" value={submitData.name} label="Name" onChange={inputDataHandler} error={submitData.validName} required />
        </Box>
        <Box component="div" m={2} className={classes.gridBox}>
          <CakeIcon />
          <ColorTextField id="birthday" name="birthday" type="date" value={submitData.birthday} label="Birthday" onChange={inputDataHandler} error={submitData.validBirthday} InputLabelProps={{ shrink: true, }} required />
        </Box>
        <Box component="div" m={2} className={classes.gridBox2}>
          <PhoneIcon />
          <MaskTextField id="phone" name="phone" value={submitData.phone} label="Phone" onChange={inputDataHandler} error={submitData.validPhone} className={classes.phone} required />
          <TelecomSelect id="telecom" name="telecom" value={submitData.telecom} label="Telecom" onChange={inputDataHandler} error={submitData.validTelecom} required />
        </Box>
        <hr className={classes.marginHr} />
        <Box component="div" m={2} className={classes.gridBox2}>
          <HomeIcon />
          <ColorTextField id="zipcode" name="zipcode" type="text" value={submitData.zipcode} label="Zip Code" onChange={inputDataHandler} error={submitData.validZipcode} required className={classes.zipcode} disabled />
          {/* <ColorPurpleButton type="button" href="/search/zipcode" variant="outlined" size="small" color="primary" className={classes.searchbtn}>Search</ColorPurpleButton> */}
          <ColorPurpleButton type="button" variant="outlined" size="small" color="primary" className={classes.searchbtn} onClick={handleOpen}>Search</ColorPurpleButton>
        </Box>
        <Box component="p" m={0}>
          <Postcode open={open} handleClose={handleClose} submitData={submitData} setSubmitData={setSubmitData} />
        </Box>
        <Box component="div" m={2} className={classes.gridBox}>
          <HomeIcon />
          <ColorTextField id="address" name="address" type="text" value={submitData.address} label="Address" onChange={inputDataHandler} error={submitData.validAddress} required disabled />
        </Box>
        <Box component="div" m={2} className={classes.gridBox}>
          <HomeIcon />
          <ColorTextField id="subaddress" name="subaddress" type="text" value={submitData.subAddress} label="Sub Address" onChange={inputDataHandler} error={submitData.validSubAddress} required />
        </Box>
      </Container>
    </Box>
  )
}
