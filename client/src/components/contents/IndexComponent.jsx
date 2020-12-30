import React from 'react';
import { withStyles, makeStyles, Container, Box } from '@material-ui/core';

import CarouselPaper from './carousel/CarouselPaper';

const StyleBox = withStyles((theme) => ({
	root: {
		padding: '5rem 0',
	}
}))(Box);

const useStyles = makeStyles((theme) => ({
	root: {

	},
	container: {

	},
}));

const SLIDE_INFO = [
	{ imgUrl: "/static/images/burberry1.jpg", imgTitle: "BURBERRY" },
	{ imgUrl: "/static/images/CHANEL1.jpg", imgTitle: "CHANEL" },
	{ imgUrl: "/static/images/burberry1.jpg", imgTitle: "PAPER3" },
];


export default function IndexComponent() {
	const classes = useStyles();
	// paper image setter
	const slideInfo = SLIDE_INFO;

	return (
		<Box className={classes.root}>
			<CarouselPaper slideInfo={slideInfo}></CarouselPaper>
			<Container className={classes.container}>
				<StyleBox>카테고리 MENU</StyleBox>
				<StyleBox>Tag별 카테고리1</StyleBox>
				<StyleBox>Tag별 카테고리2</StyleBox>
				<StyleBox>Tag별 카테고리3</StyleBox>
				<StyleBox>Tag별 카테고리4</StyleBox>
				<StyleBox>Tag별 카테고리5</StyleBox>
			</Container>
		</Box>
	)
}
