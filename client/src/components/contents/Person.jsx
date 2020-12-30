import React from 'react'

import { makeStyles, Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root: {

	},
	container: {

	},
}));

export default function Person() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container>
				<div>PERSON</div>
			</Container>
		</div>
	)
}
