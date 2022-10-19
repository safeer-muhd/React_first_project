import React from 'react'
import { useState } from 'react'

// axios_library form simble apl calling !
import axios from 'axios'
function Apicall() {
    const [state,setState] = useState([])

    return (
    <div>
        <h1>this is an axios_library easy fetch method from another library </h1>
        <button onClick={() =>{
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                console.log(response.data)
                setState(response.data)
            })
        }}>Click me</button>
        {state.map((obj,index) => {
            return(
                <div>
                    <h2>{index+1}</h2>
                    <h2>{obj.body}</h2>
                    <h4>{obj.title}</h4>
                </div>
            )
        })}
    </div>
    )
}

export default Apicall