import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Fab, useScrollTrigger, Slide } from '@material-ui/core';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const  useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

ScrollTop.propTypes = {
  window: PropTypes.func,
};

export default function ScrollTop() {
    const classes = useStyles();
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      event.preventDefault();
      const anchor = (event.target.ownerDocument || document).querySelector('#contents');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <Slide direction="up" in={trigger}>
        {/* <Fab onClick={handleClick} role="presentation" color="secondary" size="small" component="button" aria-label="scroll back to top" className={classes.root}> */}
        <Fab onClick={handleClick} role="presentation" color="secondary" size="small" component="button" aria-label="scroll back to top" className={classes.root}>
						<KeyboardArrowUpIcon />
				</Fab>
      </Slide>
    );
  }