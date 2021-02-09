import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { authLogout } from '../../actions/auth';

export const DashboardOptions = () =>
{
	/* Instances */
	const dispatch = useDispatch();

	return (
		<>
			<Button
				secondary
				content="Logout"
				type='submit'
				className='btn-submit'
				onClick={ () => dispatch( authLogout() )}
			/>
		</>
	)
}
