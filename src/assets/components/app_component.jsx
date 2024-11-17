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

   function ProductList() {
    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name} - ${product.price}:
                    {product.description}
                </li>
            ))}
        </ul>
    );
}
export default ProductList