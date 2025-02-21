import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>🛒 Online Store</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price} - Stock: {product.stock}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
