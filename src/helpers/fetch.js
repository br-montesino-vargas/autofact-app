const apiURL = process.env.REACT_APP_API_URL;
//permite buscar info de la api siempre que se encuentre logeado el usuario
const fetchWithToken = ( route, endpoint, data, method = 'GET' ) =>
{
	const url = `${ apiURL }/${ route }/${ endpoint }`;
	const token = localStorage.getItem('token') || '';

	if( method === 'GET' )
	{
		return fetch( url,
		{
			method,
			headers: { token }
		});
	}
	else
	{
		return fetch( url,
		{
			method,
			headers: {
				'Content-type': 'application/json',
				token
			},
			body: JSON.stringify( data )
		});
	}
}
//permite buscar info de la api sin necesidad de logearse
const fetchWithoutToken = ( route, endpoint, data, method = 'GET' ) =>
{
	const url = `${ apiURL }/${ route }/${ endpoint }`;

	if( method === 'GET' )
	{
		return fetch( url );
	}
	else
	{
		return fetch( url,
		{
			method,
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify( data )
		});
	}
}

export { fetchWithToken, fetchWithoutToken };