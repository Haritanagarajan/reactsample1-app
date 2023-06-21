// import React, { useState } from "react";
// import { Routes, Link, Route} from "react-router-dom";
// import { useEffect } from 'react';
// import ProductDetails from "./ProductDetails";

// const RouterComponent = () => {
//     return (
//         <div>

//             <ul>
//                 <li>
//                     <Link to="Products" className="navlink1">Products</Link>
//                 </li>


//             </ul>

//             <div className="routercomponent">

//                 <Routes>

//                     <Route path="Products" element={<Products />}></Route>

//                     <Route path="ProductDetails/:id" element={<ProductDetails />} />


//                 </Routes>

//             </div>

//         </div>
//     );
// };



// export const Products = () => {
//     const [product, setproduct] = useState([]);
//     const [shownames, setNames] = useState(null);


//     function toggle(details) {
//         if (shownames && shownames.id === details.id) {
//             setNames(null);
//         } else {
//             setNames(details);
//         }
//     }

//     const fetchData = () => {
//         fetch('http://localhost:4000/Products')
//             .then((response) => response.json())
//             .then((data) => {
//                 setproduct(data);
//             });
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div className="ms-5" style={{ marginLeft: 150, marginTop: 100 }}>

//             {product.length > 0 && (

//                 <div className="row">

//                     {product.map((details) => (

//                         <div className="card me-4 " style={{ border: 'none', width: '300px', height: '350px' }} key={details.id}>


//                             <img className="mt-3 mt-5" src={details.pimg} alt={details.pname} style={{ width: '270px', height: '240px' }} />




//                             <button onClick={() => toggle(details)} className="btn">

//                                 {shownames && shownames.id === details.id
//                                     ? 'LESS INFO'
//                                     : 'MORE INFO'}

//                                 {shownames && shownames.id === details.id && (
//                                     <div className='card' style={{ border: 'inset' }}>
//                                         <p style={{ color: 'black', fontWeight: '500' }}>
//                                             {details.pname}
//                                             <br />
//                                             {details.pamnt}

//                                         </p>
//                                     </div>
//                                 )}
//                             </button>





//                             <li key={details.id} className="mt-3">

//                                 <Link to={`ProductDetails/${details.id}`} className="navlink1 ms-5 ps-3 mt-5">

//                                     View Order {details.id}

//                                 </Link>

//                             </li>





//                         </div>






//                     ))}


//                 </div>
//             )}

//         </div>
//     );
// };












// export default RouterComponent;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReactComponent = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/Products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setproducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(products);

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{paddingLeft:50}} >
      <h2 style={{ color: 'black', fontWeight: '600' }}>Products</h2>

      {products.map((product) => (
        <Link key={product.id} to={`/ProductDetails/${product.id}`} style={{ textDecoration: 'none' }}>
          <div style={{ marginLeft: 10,display:'inline-flex', flexDirection: 'col' }}>
            <img src={product.pimg} height={400} width={400} alt={product.pname} />
            <span style={{ marginTop: '400px', display: 'block',marginLeft:-130,marginRight:20,padding:6}}>VIEW DETAILS</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReactComponent;