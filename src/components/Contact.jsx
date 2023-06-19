import { useState } from "react";
import courseList from './Data/Traineedetails.json'


export default function Contact() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handlePreviousClick() {
        setIndex(index - 1);
    }


    function handleMoreClick() {
        setShowMore(!showMore); //true
    }


    let course = courseList[index];

    return (
        <div style={{ marginLeft: 150, marginTop: 50 }}>

            <button
                onClick={handleNextClick}
                className="btn"
                style={{ backgroundColor: 'black', width: '80px', height: '50px', color: 'white' }}>
                Forward</button>

            <span>
                <button
                    onClick={handlePreviousClick}
                    className="btn ms-5"
                    style={{ backgroundColor: 'black', width: '80px', height: '50px', color: 'white', paddingright: '-100px' }}>
                    Backward</button>

            </span>

            <h2 className="m-5">
                <i>{course.name} </i>
            </h2>

            <h3 className="ms-5">
                ({index + 1} of {courseList.length})
            </h3>

            <button onClick={handleMoreClick} className="btn " style={{ backgroundColor: 'black', color: 'white', marginLeft: '500px', marginTop: '100px' }}>

                {showMore ? "Hide Description" : "Read Description ..."}
            </button>

            <br />
            {/* Both the conditions must satisfy */}
            {showMore &&
                <div className="card" style={{ width: '300px', paddingLeft: '70px', border: 'inset' }}>
                    <p className="ms-5" style={{ color: 'black', fontWeight: '500' }}>{course.name}<br /></p>

                    <p style={{ color: 'black', fontWeight: '500' }}> {course.role}</p>

                    <p style={{ color: 'black', fontWeight: '500' }}>{course.experience}</p>

                    <p style={{ color: 'black', fontWeight: '500' }}> {course.description}</p>
                </div>
            }
            <img
                src={course.url}
                alt="identity"
                height={450}
                width={400}
                style={{ marginLeft: 650, marginTop: '-400px' }}
            />
        </div>
    );
}