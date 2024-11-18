import { useState } from "react";
import ProductForm from "./add_product_form";


   function ProductList() {
    const [products, setProducts] = useState([
        {id: 1, 
        name: 'Titos Handmade Vodka', 
        price: 30, 
        description:'A craft vodka from Texas, made from corn for a subtly sweet, clean taste.'},
        {id:2, 
        name:'Grey Goose', 
        price:40,
        description:'A French vodka, renowned for its smooth, refined flavor, crafted from soft winter wheat and distilled in the Cognac region.'},
        {id:3, 
        name:'Kettle One', 
        price:45, 
        description:'A high-quality Dutch vodka, made from 100% wheat and distilled using traditional copper pot stills for a smooth finish.'}
   ]);

   const handleSubmit = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
};
  
return (
    <div>
    <h2>Product List</h2>
    <ul>
        {products.map(product => (
            <li key={product.id}>
                <h3>{product.name} - ${product.price}</h3>
                <h5>{product.description}</h5>
                
            </li>
        ))}
    </ul>
    <ProductForm handleSubmit={handleSubmit} />
</div>
)}

export default ProductList;
