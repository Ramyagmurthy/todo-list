import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

    const TodoList =({todoList})=>{
        let text = 1
        return(
            <div>
                <h2> To Do List</h2>
                {
                    todoList.map(enteredList => <h3 key={text++}>{enteredList}</h3>)
                }
                <Link to='/'>Go To Add Text</Link>
            </div>
        )
    }
     
    const mapStateToProps=({enteredList:{todoList}}) => ({
       todoList
    })
    export default connect(mapStateToProps,null)(TodoList);





