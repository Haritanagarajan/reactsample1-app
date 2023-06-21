import React, { useState } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const RouterComponent = () => {
    return (
        <div>

            <ul>
                <li>
                    <Link to="Products" className="navlink1">Products</Link>
                </li>


            </ul>

            <div className="routercomponent">

                <Routes>

                    <Route path="Products/" element={<Products />}></Route>


                    <Route path="/ProductDetails/:details.id" element={<ProductDetails />} />


                </Routes>

            </div>

        </div>
    );
};



export const Products = () => {
    const [product, setproduct] = useState([]);
    // const [shownames, setNames] = useState(null);


    // function toggle(details) {
    //     if (shownames && shownames.id === details.id) {
    //         setNames(null);
    //     } else {
    //         setNames(details);
    //     }
    // }

    const fetchData = () => {
        fetch('http://localhost:4000/Products')
            .then((response) => response.json())
            .then((data) => {
                setproduct(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="ms-5" style={{ marginLeft: 150, marginTop: 100 }}>

            {product.length > 0 && (

                <div className="row">

                    {product.map((details) => (

                        <div className="card me-4 " style={{ border: 'none', width: '300px', height: '350px' }} key={details.id}>


                            <img className="mt-3 mt-5" src={details.pimg} alt={details.pname} style={{ width: '270px', height: '240px' }} />




                            {/* <button onClick={() => toggle(details)} className="btn">

                                {shownames && shownames.id === details.id
                                    ? 'LESS INFO'
                                    : 'MORE INFO'}

                                {shownames && shownames.id === details.id && (
                                    <div className='card' style={{ border: 'inset' }}>
                                        <p style={{ color: 'black', fontWeight: '500' }}>
                                            {details.pname}
                                            <br />
                                            {details.pamnt}

                                        </p>
                                    </div>
                                )}
                            </button> */}





                            <li key={details.id} className="mt-3">

                                <Link to={`ProductDetails/${details.id}`} className="navlink1 ms-5 ps-3 mt-5">

                                    View Order {details.pname}

                                </Link>

                            </li>





                        </div>






                    ))}


                </div>
            )}

        </div>
    );
};











export const ProductDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const onBackClick = (e) => {
        e.preventDefault();
        // navigate("/RouterComponent/Products");
    };

    return (
        <>
            {/* <h2 style={{ color: 'black', fontSize: 21 }}>Details of order {params.details.id}</h2> */}
            <button onClick={onBackClick} style={{ color: 'black', fontSize: 21 }}>
                Back to Products
            </button>
        </>
    );
};

export default RouterComponent;