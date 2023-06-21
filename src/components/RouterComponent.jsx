
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