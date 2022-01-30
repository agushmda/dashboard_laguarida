import React from 'react';
import Card from './Cards';
import { cardsMetrics } from '../../../utils/helper';

const Metrics = () => {
    return (
        <div className="row">
            
            {cardsMetrics.map( (card, i) => {

                return <Card {...card} key={card.title + i}/>
            
            })}

        </div>
    )
}

export default Metrics;