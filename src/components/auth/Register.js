import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Form, Button } from 'semantic-ui-react';
import alert from 'cogo-toast';

import { authRegister } from '../../actions/auth';

export const Register = () =>
{
	/* Dispatch */
	const dispatch = useDispatch();

	/* States */
	const [ loading, setLoading ] = useState(false);

	/* Inicializar el formulario */
	const [ register, setRegister ] = useForm({ email: '', pass: '', pass2: '' });
	const { email, pass, pass2 } = register;

	/* Functions */
	const handleRegister = ( e ) =>
	{
		e.preventDefault();

		setLoading(true);

		if( pass === pass2 )
		{
			dispatch( authRegister( email, pass, setLoading ) );
		}
		else
		{
			setLoading(false);
			return alert.warn('Las contraseñas deben coincidir');
		}
	}

	return (
		<>
			<h2 className="app__title">Sign Up</h2>
			<div className='app__container-form'>
				<Form className='app__form' onSubmit={ handleRegister }>
					<Form.Input
						type='text'
						name='email'
						icon='mail'
						iconPosition='left'
						placeholder='Correo Electrónico'
						onChange={ setRegister }
					/>
					<Form.Input
						type='password'
						name='pass'
						icon='lock'
						iconPosition='left'
						placeholder='Contraseña'
						onChange={ setRegister }
					/>
					<Form.Input
						type='password'
						name='pass2'
						icon='lock'
						iconPosition='left'
						placeholder='Repetir contraseña'
						onChange={ setRegister }
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
					¿Ya tienes una cuenta?
					<span>
						<Link to="/auth/login">
							Inicia sesión
						</Link>
					</span>
				</p>
			</div>
		</>
	)
}