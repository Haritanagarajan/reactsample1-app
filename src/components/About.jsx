import React, { useEffect, useState } from 'react';

const About = () => {
    const [namesindex, setNamesindex] = useState([]);
    const [shownames, setNames] = useState(null);

    function toggle(names) {
        if (shownames && shownames.id === names.id) {
            setNames(null);
        } else {
            setNames(names);
        }
    }

    const fetchData = () => {
        fetch('http://localhost:4000/users')
            .then((response) => response.json())
            .then((data) => {
                setNamesindex(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ marginLeft: 150, marginTop: 100 }}>

            {namesindex.length > 0 && (

                <div className="row">

                    {namesindex.map((names) => (



                        <div
                            className="col-md-3"
                            key={names.id}
                            style={{
                                width: 150,
                                borderRadius: 10,
                                marginLeft: 50,
                                marginBottom: 30,
                            }}
                        >
                            <div style={{ border: 'none', marginTop: 10 }}>

                                <div className="card">

                                    <button onClick={() => toggle(names)} className="btn">

                                        {shownames && shownames.id === names.id
                                            ? 'LESS INFO'
                                            : 'MORE INFO'}

                                        {shownames && shownames.id === names.id && (
                                            <div className='card' style={{ border: 'inset' }}>
                                                <p style={{ color: 'black', fontWeight: '500' }}>
                                                    {names.name}
                                                    <br />
                                                    {names.role}
                                                    <br />                                                    {names.experience}

                                                </p>
                                            </div>
                                        )}
                                    </button>

                                </div>

                                <img src={names.url} alt={names.name} height={100} width={100} style={{ marginLeft: '10px' }} />

                            </div>
                        </div>
                    ))}


                </div>
            )}

        </div>
    );
};

export default About;
