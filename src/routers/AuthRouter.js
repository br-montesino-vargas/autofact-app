import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from 'semantic-ui-react';

import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';

export const AuthRouter = () =>
{
	return (
		<Container fluid className="app__container">
			<Switch>
				<Route exact path="/auth/login" component={ Login } />
				<Route exact path="/auth/register" component={ Register } />

				<Redirect to="/auth/login" />
			</Switch>
		</Container>
	)
}
