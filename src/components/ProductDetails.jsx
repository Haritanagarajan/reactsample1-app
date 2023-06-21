import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";



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
            <div style={{ marginTop: -90 }}>
                <h2 style={{ color: 'black', paddingLeft: 10, fontWeight: '200' }}>Product Details</h2>
                <img className="mt-5 pt-5" src={products.pimg} alt={products.pamnt} height={300} width={300} onClick={handleGoBack} />
                <h5>Price: {products.pamnt}</h5>
                <button type="button" class="btn btn-success" onClick={Buynow}>BUY NOW</button>
                <button type="button" class="btn btn-success ms-5">ADD TO CART</button>

            </div>
        </div>
    );
};




const Buynow = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You wanted to buy it!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'order placed!',
                'Your order will be deleivered.',
                'success'
            )
        }
    })
}

export default ProductDetails;