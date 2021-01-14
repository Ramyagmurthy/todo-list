
const INITIAL_STATE={
    enteredList:'',
    todoList:[],
}
const userReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "ADD_TO_LIST":
        return{
            //...state,
            todoList:[...state.todoList,action.payload]
        }
        case "DISPLAY_LIST":
        return{
            ...state,
            enteredList: action.payload
        }
        default: return state
           
        
    }
}

export default userReducer