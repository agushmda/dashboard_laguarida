import React from "react";
import react from "react";
import Metrics from "./Metrics";
import Cards from "./Cards"
import Tables from "./Tables";

function Content(){
    return(
        <React.Fragment>

                            <div className="container-fluid">
                                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h1 className="h3 mb-0 text-gray-800">La Guarida Dashboard</h1>
                                    </div>                                              

                                <Metrics />
                                <Cards />
                                <Tables />


                            </div>       

        </React.Fragment>
    )
}

export default Content;