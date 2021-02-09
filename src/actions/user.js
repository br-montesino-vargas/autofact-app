import alert from 'cogo-toast';
import { fetchWithToken } from "../helpers/fetch";

export const userAddQuiz = ( question1, question2, question3, setLoading ) =>
{
	return async () =>
	{
		const response = await fetchWithToken( 'user', 'addQuiz', { question1, question2, question3 }, 'POST' );
		const body = await response.json();

		if( body.status )
		{
			alert.success( body.msg );
			setLoading(false);
		}
		else
		{
			alert.error( body.msg );
			setLoading(false);
		}
	}
}