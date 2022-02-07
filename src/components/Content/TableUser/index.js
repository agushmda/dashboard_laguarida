import React, { useEffect, useState } from 'react';
import RowTableUsers from './RowTableUsers';

function TableUser () {

    let styleButton = {
        marginTop: '10px'
    }

    const [users, setusers] = useState([]);
    const [page, setPage] = useState(1);
    
    const baseLaGuarida = 'http://localhost:8080'

    useEffect(() => {
        console.log(`entre al effect con ${page}`);
        fetch(`${baseLaGuarida}/api/users/?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setusers(data.users);
            })
    }, [page])

    console.log(users.count)

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    const nextPage = () => {
        setPage(page + 1);
    }

    console.log(users);
    return (
<div>
        <h4>Tabla de Usuarios</h4>
        <div className="card shadow mb-4">
            
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                {/* {Object.keys(products)} */}
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Email</th>
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
                            users.length > 0 ? users.map( ( user , i) => {
                                return <RowTableUsers user={user} key={user.id + i}/>
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

export default TableUser;