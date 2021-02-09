import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { AuthRouter } from './AuthRouter';
import { MainRouter } from './MainRouter';

import { authRenew } from '../actions/auth';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () =>
{
	const dispatch = useDispatch();
	const { check, id } = useSelector( state => state.auth );

	useEffect(() =>
	{
		dispatch( authRenew() );

	}, [ dispatch ]);

	if( check )
	{
		return <h1>Cargando...</h1>
	}
	// <Loader styles="ui__loader-height" />

	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<PublicRoute
						path='/auth'
						component={ AuthRouter }
						isAuthenticated={ !!id }
					/>

					<PrivateRoute
						path='/'
						component={ MainRouter }
						isAuthenticated={ !!id }
					/>

					<Redirect to='/auth' />
				</Switch>
			</div>
		</Router>
	)
}
