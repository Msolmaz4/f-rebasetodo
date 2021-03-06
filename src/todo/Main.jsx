import React, { useState ,useEffect} from "react";
import{ Button ,TextField }from '@mui/material';
import Todo from "./Todo";
import DeleteIcon from '@mui/icons-material/Delete';
import db from '../auth/firebase'
import { collection,getDocs ,addDoc,deleteDoc,doc} from 'firebase/firestore'

const Main = () => {
  const [input, setInput] = useState('');
  const [load, setLoad] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //setLoad([...load, { input }]);
    const collRef = collection( db,'todos');
    addDoc(collRef,{todo:input})
    .then(res=>{
     // console.log('res',res)
     setLoad([...load,{todo:input , id:res.id}])
    })
    
    setInput('')
    
  };
  
  const deleteItem=(id)=>{
    const docRef = doc(db,'todos')
    deleteDoc(docRef)
    .then(()=>{
      let filterLoad = load.filter(todo => todo.id !=id)
      console.log('filterLoad',filterLoad)
      setLoad(filterLoad)
    })
  }


const getTodos = async (db)=>{
let todos=[]
  const collRef = collection( db,'todos');
  const todoScnapp = await getDocs(collRef)
 // console.log(todoScnapp)
  todoScnapp.docs.forEach(doc=>{
    todos.push({...doc.data(),id:doc.id})
  })
  console.log('gero',todos)
  setLoad(todos)
}




  useEffect(()=>{
    getTodos(db)
  },[])

 

  return (
    <div>


      <form onSubmit={handleSubmit}>
        <h1>TODo lIST</h1>
        <TextField id="outlined-basic" 
        value={input} onChange={(e) => setInput(e.target.value)}
        />
        
        <Button  onClick={handleSubmit}   variant="contained">ADD TO</Button>
        
        
  
      {load.map((e) => (
      <div className="map">
          <ul>
          <li>
        <h1 className="map">{e.todo}
        <button
        
         onClick={()=>deleteItem(id)}
         className="delete"
         > delete</button>
        </h1>
        </li>
        </ul>
      </div>
    ))

    

  }


      </form>
    </div>
  );
};

export default Main;
