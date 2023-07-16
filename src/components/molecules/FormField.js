import { InputForm } from "../atoms/inputs/InputForm";
import { LabelField } from "../atoms/labels/LabelField";

export const FormField = (props) =>{
    return (
        <div>  
            <div>
                <LabelField text={props.text}  />
            </div>
            <InputForm 
                type={props.type} 
                hint={props.hint} 
                name={props.name} 
                onChange={props.onChange} 
                value={props.value}
                required={props.required}
            />
        </div>
    )
}