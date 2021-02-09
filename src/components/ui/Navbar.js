import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { DashboardOptions } from '../dashboard/DashboardOptions';

export const Navbar = () =>
{
	const { id } = useSelector( state => state.auth );

	return (
		<div className='ui__navbar'>
			<Container>
				{ id && <DashboardOptions /> }	
			</Container>
		</div>
	)
}
