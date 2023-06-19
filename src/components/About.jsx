import React from "react";
import { useState,useEffect } from 'react';




const About = () => {
    const [details, setDetails] = useState([]); // empty array

    const fetchData = () => {
        fetch("http://localhost:3000/Traineedetails")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setDetails(data); //fakeAPI details
                console.log(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ marginLeft: 150, marginTop: 100 }}>
            {details.length > 0 && (
              
                <div className="row">
                    {details.map((details) => (
                        <div className="col-md-3" key={details.id} style={{ border: 'inset', width: 150, borderRadius: 10, marginLeft: 50, marginBottom: 30 }}>
                            <div className="card" style={{ border: 'none', marginTop: 10 }}>
                                <div className="card-head">
                                    <img
                                        src={details.url}
                                        alt={details.role}
                                        height={100}
                                        width={100}
                                    />
                                </div>
                            </div>
                            <div className="card-body">{details.experience}<br/>{details.name}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default About;