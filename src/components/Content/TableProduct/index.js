import React, { useEffect, useState } from 'react';
import RowTable from './RowTable';

function Tables () {

    let styleButton = {
        marginTop: '10px'
    }

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    
    const baseLaGuarida = 'http://localhost:8080'

    useEffect(() => {
        console.log(`entre al effect con ${page}`);
        fetch(`${baseLaGuarida}/api/products/?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            })
    }, [page])

    console.log(products.count)

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    const nextPage = () => {
        setPage(page + 1);
    }

    console.log(products);
    return (
        <div>
        <h4>Tabla de Productos</h4>
        <div className="card shadow mb-4">
            
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                {/* {Object.keys(products)} */}
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Precio (ARS)</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>
                                <button onClick={previousPage}>Anterior</button>
                                <button onClick={nextPage}>Siguiente</button>
                            </th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            products.length > 0 ? products.map( ( product , i) => {
                                return <RowTable product={product} key={product.id + i}/>
                            })
                            :
                            null
                            }

                        </tbody>

                        {/* <button onClick={previousPage} style={styleButton}>Anterior</button>
                        <button onClick={nextPage} style={styleButton}>Siguiente</button> */}
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Tables;