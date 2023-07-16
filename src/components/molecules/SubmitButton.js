import { ButtonForm } from "../atoms/buttons/ButtonForm";

export const SubmitButton = (props) =>{
    return (
        <div>
            <ButtonForm text={props.text} />
        </div>
    )
}