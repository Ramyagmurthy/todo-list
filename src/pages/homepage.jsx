import CustomButton from "../component/custom-button.component";
import FormInput from "../component/form-input";
import {addToList,displayList} from "../redux/user/user.actions"
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
//import { addToList } from "../redux/user/user.actions";

const HomePage=({enteredList, addToList, displayList})=>{
    const handleChange = event => {
        displayList(event.target.value)
        console.log(enteredList)
    }

    const handleSubmit=() => {
        if(addToList(enteredList))
        alert("Todo added")
    }
    return(
        <div className='homepage'>
        <h1>Add To List</h1>
        <FormInput handleChange={handleChange}/>
        <CustomButton onClick={handleSubmit}>Submit</CustomButton>
        <br/>
        <Link to='/todopage'> ClickHere for To-Do List </Link>
       
       
    </div>)
    
}

const mapStateToProps=({enteredList:{enteredList}}) => (
    {
        enteredList
    }
)
 
const mapDispatchToProps = dispatch => (
    {
        addToList: enteredList => dispatch(addToList(enteredList)),
        displayList: enteredList => dispatch(displayList(enteredList))
    }
)
    
    
    
    

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);