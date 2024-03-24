import { useState } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
import pizzasData from "../../pizzaData.jsx";
import images from "../../Images.jsx";

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pizzasData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pizzasData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="home-container">
            <div className="carousel">
                <button className="arrow-button prev" onClick={handlePrev}>&lt;</button>
                <ul className="pizza-list" style={{ transform: `translateX(-${currentIndex * (100 / pizzasData.length)}%)` }}>
                    {pizzasData.map((pizza, index) => (
                        <li key={pizza.id} className={index === currentIndex ? 'active' : ''}>
                            <Link to={`/products/${pizza.id}`}>
                                <img src={images[pizza.image]} alt={pizza.name} />
                                <h3>{pizza.name}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="arrow-button next" onClick={handleNext}>&gt;</button>
            </div>
        </div>
    );
};

export default Home;
