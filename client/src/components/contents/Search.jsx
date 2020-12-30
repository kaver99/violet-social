import React from 'react'

import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {

	},
}));

export default function Search() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container>
				<div style={{padding: '5rem 0'}}>SEARCH</div>
			</Container>
		</div>
	)
}
