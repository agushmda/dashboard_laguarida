import React from 'react';


function RowTableUsers ({user}) {
    return (
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            )
    }
    
        

export default RowTableUsers;