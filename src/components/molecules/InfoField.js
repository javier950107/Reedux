import {TextField} from "../atoms/texts/TextField"

export const InfoField = (props) =>{
    return (
        <div>
            <TextField info={props.info} />
            <p>---------------------</p>
        </div>    
    )
}