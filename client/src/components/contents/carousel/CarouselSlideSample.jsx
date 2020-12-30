import React from 'react';
import { withStyles, makeStyles, Box } from '@material-ui/core';

// icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const PaperImgBox = withStyles((theme) => ({
	root: {
    whdth: '100%',
    height: '100%',
		backgroundColor: 'transparent',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}
}))(Box);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
		height: '300px',
  },
	carousel: {
    display: 'flex',
    width: '100%',
    height: '300px',
    alignItems: 'center',
    position: 'absolute',
    top: '3%',
    padding: '5px',
	},
	arrows: {
    display: 'contents',
    width: '100%',
    color: '#FFF',
    cursor: 'pointer',
	},
}));

function Arrow(props) {
  const classes = useStyles();

  const { direction, clickFunc } = props;
  const icon = direction === 'left' ? <ArrowBackIosIcon/> : <ArrowForwardIosIcon/>;
  const flexLocation = direction === 'left' ? "flex-start" : "flex-end";

  return <Box className={classes.arrows} justifyContent={flexLocation} onClick={clickFunc}>{icon}</Box>;
}


export default function CarouselSlide(props) {
  const classes = useStyles();

  const [index, setIndex] = React.useState(0);
  const SLIDE_INFO = props.slideInfo[index];
  const numSlides = props.slideInfo.length;
  
  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  }

  return (
    <Box className={classes.root}>
      <PaperImgBox style={{backgroundImage: `url(${SLIDE_INFO.imgUrl})`}}></PaperImgBox>
      {SLIDE_INFO.imgTitle}
      <Box className={classes.carousel}>
        <Arrow  direction='left' clickFunc={() => onArrowClick('left')} style={{left:0}} />
        <Arrow direction='right' clickFunc={() => onArrowClick('right')} style={{right: 0}} />
      </Box>
    </Box>
  )
}
