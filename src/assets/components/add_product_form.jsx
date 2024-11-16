
import React from "react";
import ProductList from "./app_component";

function AddProduct() {
    const [products, setProducts] = useState([]);

    const AddProduct = (product) => {
        setProducts([...products, product]);
    };

    return (
        <div>
            <h2>Product List</h2>
            <button onClick={() => AddProduct(4,'Belvedier',40,'test')}>Add Product</button>
            <ul>
                {products.map((product, index) => (
                    <li key={product.id}>{product}</li>
                ))}
            </ul>
        </div>
    );
}


export AddProduct