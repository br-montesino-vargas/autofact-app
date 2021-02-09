import alert from 'cogo-toast';

import { types } from '../context/types';
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";

export const authLogin = ( email, password, setLoading ) =>
{
	return async ( dispatch ) =>
	{
		const response = await fetchWithoutToken( 'auth', 'login', { email, password }, 'POST' );
		const body = await response.json();


		if( body.status )
		{
			const { id, email, role, token } = body;

			localStorage.setItem('token', token );
			localStorage.setItem('token-init-date', new Date().getTime() );

			dispatch( login({ id, email, role }) );
		}
		else
		{
			alert.error( body.msg );
			setLoading(false);
		}
	}
}

export const authRegister = ( email, password, setLoading ) =>
{
	return async ( dispatch ) =>
	{
		const response = await fetchWithoutToken('auth', 'register', { email, password }, 'POST' );
		const body = await response.json();

		if( body.status )
		{
			const { id, email, role, token } = body;

			localStorage.setItem('token', token );
			localStorage.setItem('token-init-date', new Date().getTime() );

			dispatch( login({ id, email, role }) );
		}
		else
		{
			alert.error( body.msg );
			setLoading(false);
		}
	}
}

export const authRenew = () =>
{
	return async ( dispatch ) =>
	{
		const response = await fetchWithToken('auth', 'renew' );
		const body = await response.json();

		if( body.status )
		{
			const { id, email, role, token } = body;

			localStorage.setItem('token', token );
			localStorage.setItem('token-init-date', new Date().getTime() );

			dispatch( login({ id, email, role }) );
		}
		else
		{
			dispatch( clearCheck() );
		}
	}
}

export const authLogout = () =>
{
	return async ( dispatch ) =>
	{
		localStorage.clear();
		dispatch( logout() );
	}
};

const login = ( user ) => (
{
	type: types.authLogin,
	payload: user
});

const clearCheck = () => ({ type: types.authClearChecking });
const logout = () => ({ type: types.authLogout });