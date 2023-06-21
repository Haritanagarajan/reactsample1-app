import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setproducts] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/Products/${id}`)
            .then((response) => response.json())
            .then((data) => setproducts(data));
    }, [id]);

    if (!products) {
        return <div>Loading...</div>;
    }

    const handleGoBack = () => {
        navigate('/RouterComponent');
    };


    return (

        <div style={{ paddingLeft: 300, paddingBottom: 60 }}>
            <h2 style={{ color: 'black', fontWeight: '600', paddingLeft: 200, marginTop: 2 }}>Products</h2>
            <div style={{ marginTop: -90 }}>
                <h2 style={{ color: 'black', paddingLeft: 10, fontWeight: '200' }}>Product Details</h2>
                <img src={products.pimg} alt={products.pamnt} height={300} width={300} onClick={handleGoBack} />
                <h5>{products.pname}</h5>
                <h5>Price: {products.pamnt}</h5>
                <button type="button" class="btn btn-success" >BUY NOW</button>
            </div>
        </div>
    );
};

export default ProductDetails;