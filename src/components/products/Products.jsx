import "./Products.css";
import { useParams } from 'react-router-dom';
import pizzasData from "../../pizzaData.jsx";
import images from "../../Images.jsx";

const Products = () => {
    const { id } = useParams();
    const index = pizzasData.find(pizza => pizza.id === parseInt(id));

    if (!index) {
        return <div>Not found pizza.</div>;
    }

    return (
        <div className="home-container">
            <div className="products">
                <h2>{index.name}</h2>
                <img src={images[index.image]} alt={index.name} />
                <p className="text"><b>Price: </b>${index.price}</p>
                <p className="text"><b>Description: </b>{index.description}</p>
                <p className="text"><b>Ingredients: </b>{index.ingredients.join(', ')}</p>
                <p className="text"><b>Stock: </b>{index.stock}</p>
            </div>
        </div>
    );
};

export default Products;
