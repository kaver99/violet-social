import React from 'react'
import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {

	},
	container: {

	},
}));

export default function Favorite() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container>
				<div style={{padding: '5rem 0'}}>FAVORITE</div>
			</Container>
		</div>
	)
}
