import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Checkbox } from 'semantic-ui-react';

import { userAddQuiz } from '../../actions/user';

export const Quiz = () =>
{
	/* Instance */
	const dispatch = useDispatch();

	/* States */
	const [ loading, setLoading ] = useState(false);
	const [ input, setInput ] = useState('');
	const [ checked, setChecked ] = useState(null);
	const [ score, setScore ] = useState(0);

	/* Functions */
	/*Condiciona que el input no pueda ser menos de 1 y mas de 5*/
	const handleScore = e =>
	{
		let value = e.target.value + "";
		
		if (value.length>1)
		{
			value = value.split("").reverse()[0] //ordena de forma inversa el objeto para obtener siempre el ultimo digito
		}
		
		let intValue = parseInt(value);
		/*verifica si el valor cúmple con condiciones de borde y, si no es así, entrega el valor correspondiente*/ 
		if(intValue>5)
		{
			setScore(5)
		}
		else if( intValue < 1 )
		{
			setScore(1)
		}
		else
		{
			setScore(intValue)
		}
	}	
	/*Guarda las preguntas en la base de datos con el dispach*/
	const handleQuiz = () =>
	{
		setLoading(true);
		dispatch( userAddQuiz( input, checked, score, setLoading ));
		
		//Una vez recibido el quiz se resetean las variables
		setInput('');
		setChecked(null);
		setScore(0);
	}

	return (
		<>
			<h2 className="app__title">Quiz</h2>
			<div className='app__container-form'>
				<Form className='app__form' onSubmit={ handleQuiz }>
					<p>¿Qué te gustaría que agregáramos al informe?</p>
					<Form.Input
						type='text'
						name='question1'
						value={ input }
						onChange={ (e) => setInput( e.target.value ) }
					/>

					<p>¿La información es correcta?</p>
					<Checkbox
						radio
						label='Si'
						value="si"
						checked={ checked === 'si' ? true : false }
						onChange={ (e) => setChecked('si') }
					/>
					<br></br>
					<Checkbox
						radio
						label='No'
						value="no"
						checked={ checked === 'no' ? true : false }
						onChange={ (e) => setChecked('no') }
					/>

					<p>¿Del 1 al 5, es rápido el sitio?</p>
					<Form.Input
						type='number'
						name='question2'
						min="1"
        				max="5"
						value={score}
						onChange={ e => handleScore(e) }
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
		</>
	)
}
