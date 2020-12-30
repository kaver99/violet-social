import React from 'react';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/modules/rootReducer';

// GraphQL
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// Styles theme
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import purple from '@material-ui/core/colors/purple';

// Grid & Router
import GridLayout from './components/layout/GridLayout';

// Material-ui Theme Setting
// App Main primary / secondary color setting
const theme = createMuiTheme({
	palette: {
    primary: {
      main: purple[600],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

// redux Chrome DevTool
const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// redux Store
const store = createStore(rootReducer, devTool);

const client = new ApolloClient({
  uri: 'http://127.0.0.1:5000/graphql',
})

function App() {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
				<CssBaseline />
				<GridLayout  style={{backgroundColor: '#FAFAFA'}}/>
				</ThemeProvider>
			</Provider>
		</ApolloProvider>
	);
}

export default App;
