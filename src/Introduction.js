import React from 'react'

function Introduction(props){
    return(
        <div>
            <h1>This is {props.class}</h1>
            <h2 className="styling">Our Teachers are {props.teacher}</h2>
        </div>
    )
}

export default Introduction;