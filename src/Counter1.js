import React,{useState,useEffect} from 'react';


function Counter1() {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);

// To using useEffect first time :
    useEffect(() => {
        console.log('Mounting');
        console.log('count1',count)
        console.log('count2',count2)
    },[count,count2] );

// thsi is an funtional normal ways of funtion :    
/*    function Counting(){
        setCount(count+1)
    }*/

    return (
    <div>
        <button onClick={() =>setCount(count+1) }>Increment</button>
        <h1>Hello Chekking .{count} </h1>

        <button onClick={() => setCount2(count2+1)}>Increment2</button>
        <h1>Hello Chekking..{count2} </h1>
    </div>
    )
}

export default Counter1