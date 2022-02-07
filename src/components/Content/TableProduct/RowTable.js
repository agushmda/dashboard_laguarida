import React from 'react';


function RowTable ({product}) {
    return (
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category.name}</td>
                </tr>
            )
    }
    
        

export default RowTable;