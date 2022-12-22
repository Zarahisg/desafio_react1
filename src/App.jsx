import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<>
			<Header title="Mi galeria de imagenes con React"></Header>
			<div className="containerGallery">
				<Card img="../imgs/flor1.webp" alt="flor1" tittle="Tulipanes Amarillos" />
				<Card img="./imgs/flor2.jpeg" alt="flor2" tittle="Girasoles" />
				<Card img="./imgs/flor3.jpeg" alt="flor3" tittle="Orquideas" />
				<Card img="./imgs/flor4.jpeg" alt="flor4" tittle="Tulipanes Morados" />
			</div>
			<Footer />
		</>
	);
}

export default App;