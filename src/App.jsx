import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
const url = "https://course-api.com/react-tours-project";
function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTours = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	const fetchTours = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			setTours(tours);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchTours();
	}, []);
	if (isLoading) {
		return (
			<main className='w-[90vw] mx-auto'>
				<Loading />
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main className='w-[90vw] mx-auto'>
				<section className='title'>
					<h2>no tours</h2>
					<div className='title-underline w-[7rem] h-1'></div>
					<button
						type='button'
						className='btn mt-5'
						onClick={() => fetchTours()}>
						Refresh
					</button>
				</section>
			</main>
		);
	}
	return (
		<main>
			<Tours tours={tours} removeTours={removeTours} />
		</main>
	);
}

export default App;
