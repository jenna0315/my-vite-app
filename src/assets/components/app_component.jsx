import { useState } from 'react';


const products = [
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
   ]
function ProductList(){
    const [products, setProducts] = useState([]);

    const AddProduct = (product) => {
        setItems([...products, product]);
    };

    return (
        <>
        <div>
            <h2>Product List</h2>
            <button onClick={() => AddProduct(products)}>Add Product</button>
            <h4>
            {products.map(product => (
                    <ProductList key={product.id}
                        name= {product.name}
                        price= {product.price}
                        description={product.description}/>)
                    )
                }
            </h4>
            </div>
            </>
            )};

            
export default ProductList;

