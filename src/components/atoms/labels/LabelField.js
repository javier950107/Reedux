

export const LabelField = (props) =>{
    const style ={
        textShadow : '1px 1px gray',
    }

    return <label style={style}><b>{props.text}</b></label>
}