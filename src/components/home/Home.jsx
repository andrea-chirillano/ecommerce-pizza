import "./Home.css";
import pizzasData from "../../pizzaData.jsx";
import images from "../../Images.jsx";

const Home = () => { 
    return(
        <div>
            <h1>Pizza list</h1>
            <ul>
                {pizzasData.map((pizza) => (
                    <li key={pizza.id}>
                        <h2>{pizza.name}</h2>
                        <img src={images[pizza.image]} alt={pizza.name} />
                        <p>Price: ${pizza.price}</p>
                        <p>Stock: {pizza.stock}</p>
                        <p>Description: {pizza.description}</p>
                        <p>Ingredients: {pizza.ingredients.join(", ")}</p>

                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Home;