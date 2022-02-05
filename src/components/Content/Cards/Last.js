import React, { useState, useEffect } from 'react';

function Last(){
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/allproducts')
        .then(res => res.json())
        .then((data) => {
            setProducts(data);
        })
    }, []);

    console.log(products);

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto en la base de datos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:8080/images/products/${products[products.length - 1].image}`} alt={products[products.length - 1].image} />
                    </div>
                    <p>{products[products.length - 1].description}</p>
                    <a className="btn btn-warning" target="_blank" rel="nofollow" href="/">Mirar el detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default Last;