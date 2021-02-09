import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './context/store';

export const App = () =>
{
	return (
		<Provider store={ store }>
			<AppRouter />
		</Provider>
	);
}