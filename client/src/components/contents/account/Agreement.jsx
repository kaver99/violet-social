import React, { useState } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { Box, Container, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { makeStyles } from '@material-ui/core';

import TermAgree from './agreeInfomation/TermAgree';
import PersonalAgree from './agreeInfomation/PersonalAgree';
import EventAgree from './agreeInfomation/EventAgree';


const useStyles = makeStyles((theme) => ({
  typography: {
    fontSize: '13px',
    flexGrow: 1,
    overflow: 'auto',
    height: '200px',
    textAlign: 'left',
  }
}))

export default function Agreement(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('termspanel');
  const { submitData, setSubmitData } = props;

  const panelHandleChange = (panel) => (event, newExpanded) => {
    event.preventDefault();
    setExpanded(newExpanded ? panel : false);
  };

  const allHandleChange = (event) => {
    event.preventDefault();
    if(event.target.checked === true) {
      setSubmitData({
        ...submitData,
        allChecked: true,
        termsagree: true,
        personalagree: true,
        eventagree: true,
        validMsg: '',
      });
    } else {
      setSubmitData({
        ...submitData,
        allChecked: false,
        termsagree: false,
        personalagree: false,
        eventagree: false,
        validMsg: 'It was not checked normally.'
      });
    }
  };

  const checkedHandleChange = ((event) => {
    event.preventDefault();

    setSubmitData({
      ...submitData,
      [event.target.name]: event.target.checked,
      allChecked: !event.target.checked ? false: submitData.allChecked,
    });

    // Accordion Controller
    let ret = '';
    if(event.target.name === 'termsagree') ret = 'personalpanel';
    else if(event.target.name === 'personalagree') ret = 'eventpanel';
    else if(event.target.name === 'eventagree') ret = '';
    setExpanded(ret);
  });

  return (
    <Box>
      <Container>
        <FormControlLabel
          control={<Checkbox checked={submitData.allChecked} onChange={allHandleChange} name="allagree" />}
          label="이용약관, 개인정보 수집 및 이용, 프로모션 안내 메일 수신(선택)에 모두 동의합니다."
        />
        <Accordion square expanded={expanded === 'termspanel'} onChange={panelHandleChange('termspanel')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          >
            <FormControlLabel
              aria-label="termsChecked"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox checked={submitData.termsagree} onChange={checkedHandleChange} name="termsagree" id="termsagree" required />}
              label="이용약관 동의"
              required
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary" className={classes.typography}>
              <TermAgree />
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion square expanded={expanded === 'personalpanel'} onChange={panelHandleChange('personalpanel')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions2-content"
            id="additional-actions2-header"
          >
            <FormControlLabel
              aria-label="personalChecked"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox checked={submitData.personalagree} onChange={checkedHandleChange} name="personalagree" id="personalagree" required />}
              label="개인정보 수집 및 이용에 대한 안내"
              required
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary" className={classes.typography}>
              <PersonalAgree />
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion square expanded={expanded === 'eventpanel'} onChange={panelHandleChange('eventpanel')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions3-content"
            id="additional-actions3-header"
          >
            <FormControlLabel
              aria-label="eventChecked"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox checked={submitData.eventagree} onChange={checkedHandleChange} name="eventagree" id="eventagree" />}
              label="프로모션 안내 메일 수신"
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary" className={classes.typography}>
              <EventAgree />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  )
}
