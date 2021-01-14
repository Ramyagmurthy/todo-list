const FormInput=(props)=>(
    <div className="form-input">
        <input type="text" placeholder="Enter the text to add to todo-list" size="40" onChange={props.handleChange}/><br/><br/>
        
    </div>
)
export default FormInput