

export const InputForm = (props) =>{
    const style = {
        borderRadius : '20px',
        width: '30%'
    }

    return <input 
        style={style} 
        type={props.type} 
        placeholder={props.hint} 
        name={props.name} 
        onChange={props.onChange}
        value={props.value}
        required={props.required}
    />
}