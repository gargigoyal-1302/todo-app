import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTodo ,deleteAll} from './redux/actions';

const TodoInput = () => {
  const dispatch = useDispatch()
  const  clickHandler= ()=>{
     dispatch(addTodo(
        {
           id : Math.random(),
           name : name
        }
     ));
     setName('');

  }
   
     let [name , setName] = useState();
     return <div>
         <div className='row '>
            <h1 className="col">Todo List </h1>
         </div>
        
        <div className='row justify-content-center'>
            <input type="text" className="col-5 form-control" value ={name} onChange={(e)=>setName(e.target.value)}/>
             <button className="btn btn-primary col-1 ml-2"  onClick={clickHandler} >Create</button>
             <button className="btn btn-danger ml-2" onClick={()=>dispatch(deleteAll(-1))}> Delete All</button>
         </div>
        
        </div>
}

export default TodoInput;