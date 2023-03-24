import React from 'react';
import Card from 'react-bootstrap/Card';

const Tarjeta = () => {
	return (
		<div>
			<Card style={{ width: '18rem' }} className='m-3 '>
				<Card.Body>
					<Card.Title>Título</Card.Title>
					<Card.Text>
						<p>Texto</p>
						<p>Texto</p>
					</Card.Text>
				</Card.Body>
			</Card>
			{/* <ul className='usuarios'>
				<li key={usuario.id} className='usuarios'>
					<p>{usuario.nombre}</p>
					<p>{usuario.email}</p>
					<p>{usuario.password}</p>
					<button type={'button'} onClick={gestorDelete} >delete</button>
				</li>
			</ul> */}
		</div>
	);
};

export default Tarjeta;
