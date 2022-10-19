import React from 'react'

function Counter({title,...obj}) {
    //Destructuring method is {argument,title} no need to argument props method like {const = {argument,title} = props}
    return (
    <div>
        <h1>{title}:{obj.argument} </h1>
        
    </div>
    )
}

export default Counter