import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

import DaumPostcode from 'react-daum-postcode';
 

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDialog-paper': {
      overflowY: 'inherit',
    }
  }

}));


export default function Postcode(props) {
  const { open, handleClose, submitData, setSubmitData } = props;

  const classes = useStyles();

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    setSubmitData({
      ...submitData,
      zipcode: data.zonecode,
      address: fullAddress,
    })
    // console.log('zonecode', data.zonecode) // 우편번호
    // console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    handleClose();
  }

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.root}
    >
      <DialogTitle id="alert-dialog-title">{"우편번호 검색 서비스"}</DialogTitle>
      <DialogContent>
          <DaumPostcode onComplete={handleComplete} />
      </DialogContent>
    </Dialog>
  );
}