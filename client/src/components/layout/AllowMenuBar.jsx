import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Slide, Box } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { StyleIconButton } from '../common/common';


export const MenuBox = withStyles((theme) => ({
  root: {
		display: 'flex',
		justifyContent: 'center',
		flexGrow: 1,
		borderRadius: '2rem',
		maxWidth: 280,
		marginLeft: 'auto',
		marginRight: 'auto',
		position: 'fixed',
		bottom: theme.spacing(3),
		left: '0',
		right: '0',
		boxShadow: '2px 6px 8px 3px rgba(0, 0, 0, .08)',
		backgroundColor: '#FFF',
		zIndex: 999,
	},
}))(Box);

const useStyles = makeStyles((theme) => ({
	icon: {
		width: '32px',
		height: '32px',
		color: 'rgba(0,0,0, 0.8)',
	},
}));

// router
export default function AllowMenuBar() {
	const [auth, setAuth] = React.useState(false);
	const classes = useStyles();

  return (
		<Slide direction="up" in={true}>
			<MenuBox color="inherit">
				<StyleIconButton href="/"><HomeOutlinedIcon className={classes.icon} /></StyleIconButton>
				<StyleIconButton href="/search"><SearchOutlinedIcon className={classes.icon} /></StyleIconButton>
				<StyleIconButton href={ auth ? "/favorite" : "/login" }><FavoriteBorderOutlinedIcon className={classes.icon} /></StyleIconButton>
				<StyleIconButton href={ auth ? "/shopping" : "/login" }><ShoppingBasketOutlinedIcon className={classes.icon} /></StyleIconButton>
				<StyleIconButton href={ auth ? "/person" : "/login" }><AccountBoxIcon className={classes.icon} /></StyleIconButton>
			</MenuBox>
		</Slide>
  );
}
