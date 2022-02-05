import React from 'react';
import PropTypes from 'prop-types';

function Card({metric}){
    return(
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${metric.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${metric.color} text-uppercase mb-1`}> {metric.name}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{metric.cantidad}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

/* DEFINICIÓNES DEFAULT */

Card.defaultProps = {
    title: 'No Title',
    color: 'success',
    cuantity: 'No cuatity',
    icon: 'fa-clipboard-list'
}

/* PROPTYPES */

Card.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    })
}



export default Card;