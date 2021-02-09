import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Form, Button } from 'semantic-ui-react';

import { authLogin } from '../../actions/auth';

export const Login = () =>
{
	/* Dispatch */
	const dispatch = useDispatch();

	/* States */
	const [ loading, setLoading ] = useState(false);

	/* Inicializar el formulario */
	const [ login, setLogin ] = useForm({ email: '', pass: '' });
	const { email, pass } = login;

	/* Functions */
	const handleLogin = ( e ) =>
	{
		e.preventDefault();

		setLoading(true);
		dispatch( authLogin( email, pass, setLoading ) );
	}

	return (
		<>
			<h2 className="app__title">Login</h2>
			<div className='app__container-form'>
				<Form className='app__form' onSubmit={ handleLogin }>
					<Form.Input
						type='text'
						name='email'
						icon='mail'
						iconPosition='left'
						placeholder='Correo Electrónico'
						onChange={ setLogin }
					/>
					<Form.Input
						type='password'
						name='pass'
						icon='lock'
						iconPosition='left'
						placeholder='Contraseña'
						onChange={ setLogin }
					/>
					<Button
						secondary
						content="Continue"
						type='submit'
						className='btn-submit'
						loading={ loading }
					/>
				</Form>
			</div>
			<div className="app__change-form">
				<p>
					¿No tienes una cuenta?
					<span>
						<Link to="/auth/register">
							Regístrate
						</Link>
					</span>
				</p>
			</div>
		</>
	)
}