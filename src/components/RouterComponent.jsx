import React from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";

const RouterComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="Orders" className="navlink1 ">Order</Link>
                </li>
            </ul>
            
            <div className="routercomponent">

                <Routes>
                    <Route path="OrderDetails/:orderId" element={<RouterComponent />}></Route>
                </Routes>

            </div>
        </div>
    );
};


export const Orders = () => {
    const orderIds = ["10001", "10002", "10003", "10004", "10005"];
    return (
        <>
            <h2 style={{ color: 'white', fontSize: 21 }}>Orders</h2>
            <ul className="orders">
                {orderIds.map((orderId) => {
                    return (
                        <li key={orderId}>
                            <Link to={`/RouterComponent/RouterAdvance/${orderId}`} className="navlink1">
                                View Order {orderId}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export const OrderDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const onBackClick = (e) => {
        e.preventDefault();
        navigate("http://localhost:3000/Routeradvance");
    };

    return (
        <>
            <h2 style={{ color: 'white', fontSize: 21 }}>Details of order {params.orderId}</h2>
            <button onClick={onBackClick} style={{ color: 'black', fontSize: 21 }}>
                Back to Orders
            </button>
        </>
    );
};

export default RouterComponent;