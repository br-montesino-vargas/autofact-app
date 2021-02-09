import React, { useState, useEffect } from 'react';

import { Pie } from 'react-chartjs-2';

export const Dashboard = () =>
{
	/* Cargar los datos necesarios para el grafico*/
	const [datosgrafico, setDatosGraficos] = useState({});
	const grafico = () =>
	{
		setDatosGraficos(
		{
			labels:['Si','NO','Más o Menos'], //Etiquetas
			datasets:
			[
                {
					label:  'respuestas de los usuarios',
					data: [90,5,12], //datos ordenados por las etiquetas
					backgroundColor: ["rgba(0,0,200,0.8)","rgba(0,200,200,0.8)","rgba(200,0,200,0.8)"], //Color de cada porcentaje de la torta
					borderWidth: 1 //borde de la torta para resaltar el limite 
                }
            ]
		})
	}

    useEffect(() =>
	{
        grafico()
		
    }, [])
	
	return (


		<div>
			<Pie data={datosgrafico}/>
		</div>
	)
}