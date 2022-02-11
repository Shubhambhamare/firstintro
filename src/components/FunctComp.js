import React from "react";

function FunctComp() {
    return(
        <div className="functCompo">
            <h1>
                This is Done Using Functional Component
            </h1>
            <div>
                <p>
                    Created using External CSS
                </p>
                <p style={{color: 'red', lineHeight : 10,padding: 20}}>
                    Created using Inline CSS
                </p>
            </div>
        </div>
    )
}

export default FunctComp;