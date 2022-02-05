import React from 'react';

const CardCategory = ({category}) => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    <h5>{category.name}</h5>
                    <span>{category.products.length}</span>
                </div>
            </div>
        </div>
    );
}
 
export default CardCategory;