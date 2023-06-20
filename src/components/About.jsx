import React from "react";
import { useEffect, useState } from 'react';




  const About = () => {
    const[namesindex, setNamesindex] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:4000/users")
            .then((response) => {
                return response.json();
            })
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

                        <div className="col-md-3" key={names.id} style={{ border: 'inset', width: 150, borderRadius: 10, marginLeft: 50, marginBottom: 30 }}>
                            <div className="card" style={{ border: 'none', marginTop: 10 }}>
                                <div className="card-head">
                                    <img
                                        src={names.url}
                                        alt={names.name}
                                        height={100}
                                        width={100}
                                    />
                                </div>
                            </div>
                            <div className="card-body">{names.experience} <br/>{names.role}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default About;
