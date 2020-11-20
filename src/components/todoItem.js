import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo  } from './redux/actions';


const TodoItem = ({todo}) => {
    const [editable ,setEditable] = useState(false);
    const [name,setName]=useState(todo.name)
    let id = todo.id;
    const dispatch = useDispatch()
    const clickHandler =() =>{
      setEditable(!editable);
      dispatch(updateTodo(
         
         {  id: id,
            name : name
         }
      ))
    }


     return <div className ='row justify-content-center'>
        <span className= 'col-4'> {editable ?
                                    <input type="text" className=" form-control" value ={name} onChange={(e)=>setName(e.target.value)}/>:
                                     <h4>{todo.name}</h4>}
        </span>
        <span classNmae ='col-2 ' >
        <button  className="btn btn-primary m-2" onClick={clickHandler}>{editable? 'Update': 'Edit'}</button>
        <button  className="btn btn-danger m-1" onClick={()=>dispatch(deleteTodo(todo.id))}>Remove</button>
        </span>
       
         
         
     </div>
}

export default TodoItem;