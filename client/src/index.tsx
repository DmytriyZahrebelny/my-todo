import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'http://localhost:3005/graphql',
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);

reportWebVitals();
