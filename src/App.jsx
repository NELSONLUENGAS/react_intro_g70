import './App.css';
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import { Form } from './components/Form';
import { Footer } from './components/Footer';

// EXPORTAR POR DEFAULT
function App() {
	const loading = true;
	const data = [
		{
			img: '/img/cupon-1.jpg',
			title: 'Plumón Coral Fleece estampado en modelo y tamaño a elección',
			description: 'Plumones Manolino',
			address: '9191 Avenida Vitacura, Chile',
			price: '45.990',
			discount: '22.990',
		},
		{
			img: '/img/cupon-2.jpg',
			title: 'Entrada para compartir + platos de fondo + postres + bebestibles',
			description: 'Plumones Manolino',
			address: '9191 Avenida Vitacura, Chile',
			price: '45.990',
			discount: '22.990',
		},
		{
			img: '/img/cupon-3.jpg',
			title:
				'Evaluación integral + blanqueamiento dental led + limpieza + fluoración',
			description: 'Plumones Manolino',
			address: '9191 Avenida Vitacura, Chile',
			price: '45.990',
			discount: '22.990',
		},
		{
			img: '/img/cupon-4.jpg',
			title: 'Plumón Coral Fleece estampado en modelo y tamaño a elección',
			description: 'Plumones Manolino',
			address: '9191 Avenida Vitacura, Chile',
			price: '45.990',
			discount: '22.990',
		},
		{
			img: '/img/cupon-5.jpg',
			title: 'Plumón Coral Fleece estampado en modelo y tamaño a elección',
			description: 'Plumones Manolino',
			address: '9191 Avenida Vitacura, Chile',
			price: '45.990',
			discount: '22.990',
		},
		{
			img: '/img/cupon-6.jpg',
			title: 'Plumón Coral Fleece estampado en modelo y tamaño a elección',
			description: 'Plumones Manolino',
			address: '9191 Avenida Vitacura, Chile',
			price: '45.990',
			discount: '22.990',
		},
	];

	return (
		<>
			<Navbar />
			<div className="container">
				<div className="card-grid p-4">
					{loading ? (
						<h1>Loading ...</h1>
					) : (
						data.map((cuppon) => (
							// <Card
							// 	img={cuppon.img}
							// 	title={cuppon.title}
							// 	description={cuppon.description}
							// 	// ...
							// />
							<Card {...cuppon} />
						))
					)}
				</div>
			</div>
			<Form />
			<Footer />
		</>
	);
}

export default App;
