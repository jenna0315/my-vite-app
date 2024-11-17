import { useState } from 'react';
import ProductList from './app_component';

import React, { useState } from 'react';

function ProductForm() {
    const [id, setProducts] = useState('');

    const handleChange = (event) => {
        setProducts(event.target.id);
    };

    return (
        <div>
            <label>
                Id:
                <button type="text" value={id} onClick={handleChange} />
            </label>
        </div>
    );
}

export default NameForm;