import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from 'semantic-ui-react';

import { Quiz } from '../components/dashboard/Quiz';
import { Dashboard } from '../components/dashboard/Dashboard';
import {useSelector} from 'react-redux';

export const MainRouter = () =>
{
	const { role } = useSelector(state => state.auth);

	return (
		<Container fluid className='app__container'>
			<Switch>
				<Route exact path="/" component={ role !== 'Administrador' ? Quiz : Dashboard } />
				<Redirect to="/" />
			</Switch>
		</Container>
	)
}