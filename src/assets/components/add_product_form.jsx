import { useState } from 'react';

function ProductForm({handleSubmit}) {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const submitForm = (e) => {
        e.preventDefault();
         
        const newProduct = {id,name,price,description}

        handleSubmit(newProduct);
        setId('');
        setName('');
        setPrice('');
        setDescription('');

    }

    return (
        <form onSubmit={submitForm}>
            <h2>Add New Product Below:</h2>
            <label>
                <h4>
                Product Id:
                <input type="number" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)}  />
                </h4>
            </label>
            <label>
            <h4>
                Product Name:
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}  />
            </h4>
            </label>
            <label>
            <h4>
                Product Price:
            <input type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)}  />
            </h4>
            </label>
            <label>
            <h4>
                Product Description:
            <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}  />
            </h4>
            </label>

            <button type="submit">Add Product</button>
        </form>
    );
}

export default ProductForm;
