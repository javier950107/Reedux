
export const ButtonForm = (props)=>{
    
    const styleButton = {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '20px',
        width: '15%',
        padding: '2px',
        borderRadius: '20px'
    }
    
    return <button style={styleButton} >{props.text}</button>
}