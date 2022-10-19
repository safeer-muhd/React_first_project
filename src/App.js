import './App.css'
import Header from './components/Header'
import {useState} from 'react'
import Counter from './Counter'
import Employee from './Employee'
import Counter1 from './Counter1'

// API colling method 
import Apicall from './components/Apicall'

//Import moduls 

const data = 'for the first react js project'
function App() {
  //day _2 and 3 first useState Operations :
  const [count,setCount] = useState(0)
  function addCount(){
        setCount(count+1)
        //console.log(count)
        }
  // Day _4 useState : 
  const [state,setState] = useState(false)

        const obj ={ // this is  an Spread Operator like <Counter {...obj} />
          title : '1st_Counter',
          argument:count
        }
        let emp = [
          {name:'Steve Jobs',age:60},
          {name:'Elon Musk',age:44},
          {name:'Mark Zuckerberg',age:35}
        ]


  return (
    <div className='hello'>
      <Header argument_data = {data}/>
      <h1 style={{color:'yellow',backgroundColor:''}}>Save the world</h1>
      <p className='p'>this is sample Description {data}</p>
      <Sample/>
      <Sample/>
      <button onClick={addCount}>Add</button>
      <Counter {...obj} />
      <Counter argument = {count} title = '2nd_Counter' />
      
      {
        emp.map((obj,index_id) => {
          return(
            //if using the Spread Operator like this <Employee key={index_id} />
            <Employee key={index_id} {...obj} />
          )
        })
      }
      
      <h1 onClick={() => setState(!state)}>Show/Hide</h1>
      
      {state ? <Counter1/> : null}
      
      <Apicall/>
      

    </div>
  );
}
// {state ? <Counter1/> : null} this is an Turnari Oparator (Single line if condition operations ) like or the same is if condition N 
export default App;

//day 1 sample  first sample 
function Sample(){
  return(
    <div>
      <h1 className='Sample'>this is an anothe function condition creating another function with the same page and call the main function</h1>
      <p className='Sample'>{data}</p>
    </div>
  )
}


