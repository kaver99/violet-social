import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { withStyles, makeStyles, Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '430px',
  },
  imgView: {
    width: '100%',
    height: '400px',
		backgroundColor: 'transparent',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
  },
}));

export default function CarouselPaper(props) {
  const classes = useStyles();
  const SLIDE_INFO = props.slideInfo;

  return (
    <Carousel className={classes.root}
      indicators={true} // 하단 slide 버튼
      interval={6000}   // autoplay 간격
      timeout={500}
      animation={"fade"} // 애니메이션 방식 ("fade" or "slide")
      next={ () => {/* Do stuff */} }
      prev={ () => {/* Do other stuff */} }
    >
      {
        SLIDE_INFO.map( (item, i) => <Item key={i} item={item} /> )
      }
    </Carousel>
  )
}

function Item(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.imgView} style={{backgroundImage: `url(${props.item.imgUrl})`}}>
      <Typography>{props.item.imgTitle}</Typography>
    </Paper>
  )
}