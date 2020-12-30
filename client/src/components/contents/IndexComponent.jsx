import React from 'react';
import { withStyles, makeStyles, Container, Box } from '@material-ui/core';


const PaperImgBox = withStyles((theme) => ({
	root: {
		width: '100%',
		height: '300px',
		backgroundColor: 'transparent',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}
}))(Box);

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

export default function IndexComponent() {
	const classes = useStyles();

	const paper1 = "/static/images/burberry1.jpg";

	return (
		<Box className={classes.root}>
			<Box>
				<PaperImgBox style={{backgroundImage: `url(${paper1})`}}></PaperImgBox>
				PAPER
			</Box>
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
