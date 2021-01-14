

const CustomButton=({children, ...otherProps})=>(
    <div>
    <button className="button" type='submit' {...otherProps}>{children}</button>
    </div>
)
export default CustomButton