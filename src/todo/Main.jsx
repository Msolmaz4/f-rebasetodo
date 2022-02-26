import React, { useState } from 'react'


const Main =()=>{


    const [input ,setInput] =useState()
    const [ load,setLoad] = useState([])

 const handleSubmit =(e)=>{
        e.preventDefault()
        setLoad([...load,{input}])
 }


    return (

       

        
        
        <div>
            <form onSubmit={handleSubmit}>
       <h1>TODo lIST</h1> 
       <input
       value={input}
       onChange={(e)=>setInput(e.target.value)}
       
       />
       <button> button



       </button>
{
    load.map((e)=>(
        <h1>{e.input}</h1>
    ))
}
       </form>
        
        </div>)
}

export default Main;