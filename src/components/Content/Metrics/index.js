import React, { useState, useEffect } from 'react';
import Card from './Cards';

const Metrics = () => {

    const [metrics, setMetrics] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/metrics')
        .then(res => res.json())
        .then((data) => {
            setMetrics(data.results);
        })
    }, []);

    return (
        <div className="row">
            
            {metrics.map( (metric, i) => {

                return <Card metric={metric} key={metric.name + i}/>
            
            })}

        </div>
    )
}

export default Metrics;