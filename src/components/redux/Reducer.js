import { ADD_TODO ,DELETE_TODO,UPDATE_TODO,DELETE_ALL} from "./actionsType";


 let initialTodo =[
    {
        id : '1',
        name:'first task todo'
    },
    {
        id : '2',
        name:'second task todo'
    },
    {
        id : '3',
        name:'third task todo'
    }
];

const Reducer = (state = initialTodo, action) =>{
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            newTodos =[ ...state];
            newTodos.push(action.payload);
            return newTodos;

        case DELETE_TODO:
            newTodos =[ ...state];
            newTodos = newTodos.filter(todo =>todo.id !== action.payload);
            return newTodos;
          

        case UPDATE_TODO:
            newTodos =[ ...state];
            newTodos.map(todo => {
               if (todo.id===action.payload.id) {
                   todo.name = action.payload.name;
                
               }        
             })
            return newTodos

        case DELETE_ALL:
            newTodos =[ ...state]; 
            newTodos = newTodos.filter(todo =>todo.id !== action.payload);
            return newTodos;

        
        default:return state;    
        
        }
      
};

export default Reducer;