import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const Addcart = () => {
    const { id } = useParams();
    const [products, setproducts] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/Products/${id}`)
            .then((response) => response.json())
            .then((data) => setproducts(data));
    }, [id]);

    if (!products) {
        return <div>Loading...</div>;
    }

    


    return (

        <div>
            <h1>{products.pname}</h1>
        </div>
    );
};

export default Addcart;