import React, { useEffect, useState } from "react";


const RouterAdvance = () => {
    const [product, setproduct] = useState([]);
    const [shownames, setNames] = useState(null);


    function toggle(details) {
        if (shownames && shownames.id === details.id) {
            setNames(null);
        } else {
            setNames(details);
        }
    }

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

                        <div className="card me-4 " style={{ border: 'inset', width: '300px', height: '350px' }} key={details.id}>


                            <img className="mt-3" src={details.pimg} alt={details.pname} style={{ width: '270px', height: '240px' }} />




                            <button onClick={() => toggle(details)} className="btn">

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
                            </button>

                        </div>







                    ))}


                </div>
            )}

        </div>
    );
};

export default RouterAdvance;







