import React from "react";
import react from "react";
import Metrics from "./Metrics";

function Content(){
    return(
        <React.Fragment>
                        {/*<!-- Content Row Top -->*/}   
                            <div class="container-fluid">
                                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
                                    </div>                                              
                                {/*<!-- Content Row Movies-->*/}
                                <Metrics />


                            </div> 

                        {/*<!-- End Content Row Top -->*/}        

        </React.Fragment>
    )
}

export default Content;