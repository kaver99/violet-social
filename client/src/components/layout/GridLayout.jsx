import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container, Box } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core';

// alert Component
import { SnackbarProvider } from 'notistack';

import { StyleIconButton } from '../common/common';

// Icon Component
import CloseIcon from '@material-ui/icons/Close';

// Content Component
import MenuAppBar from './MenuAppBar';
import AllowMenuBar from './AllowMenuBar';
import IndexComponent from '../contents/IndexComponent';
import Search from '../contents/Search';
import Favorite from '../contents/Favorite';
import Shopping from '../contents/Shopping';
import Person from '../contents/Person';
import Login from '../contents/account/Login';
import Regist from '../contents/account/Regist';
import PwInquiry from '../contents/help/PwInquiry';
import Footer from './Footer';

// import ScrollTop from './ScrollTop';

const ContentBox = withStyles((theme) => ({
	root: {
		left: 0,
		right: 0,
		width: '100%',
		position: 'absolute',
		maxWidth: '1280px',
		//minHeight: '100vh',
		flexGrow: 1,
		border: '1px solid rgba(0,0,0,.08)',
		padding: '79px 0 0 0 !important',
		marginLeft: 'auto',
		marginRight: 'auto',
		backgroundColor: '#FFF',
	}
}))(Box);

const useStyle = makeStyles((theme) => ({
	btnClose: {
		color: '#fff',
	}
}));


export const routes = [
  {
    component: IndexComponent,
    path: "/"
  },
  {
    component: Search,
    path: "/search"
	},
  {
    component: Favorite,
    path: "/favorite"
	},
  {
    component: Shopping,
    path: "/shopping"
  },
  {
    component: Person,
    path: "/person"
	},
	{
		component: Login,
		path: "/login"
	},
	{
		component: Regist,
		path: "/regist"
	},
	{
		component: PwInquiry,
		path: "/pwinquiry"
	},
];


export default function GridLayout() {
	const classes = useStyle();

	const notistackRef = React.createRef();
	const handleClose = key => () => {
		notistackRef.current.closeSnackbar(key);
	}

	return (
		<SnackbarProvider maxSnack={3} hideIconVariant anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
			ref={notistackRef}	
			action={(key) => (
				<StyleIconButton color="secondary" aria-label="close" variant='round' onClick={handleClose(key)} className={classes.btnClose}>
					<CloseIcon />
				</StyleIconButton>
			)}
		>
		<Container>
			<MenuAppBar/>
			<AllowMenuBar />
			<ContentBox>
				<Router>
					{
						routes.map(route => 
								<Route exact key={route.path} path={route.path} component={route.component} />
						)
					}
				</Router>
				{/* <ScrollTop /> */}
				<Footer />
			</ContentBox>
		</Container>
		</SnackbarProvider>
	)
}
