import { FormField } from "../molecules/FormField"
import { SubmitButton } from "../molecules/SubmitButton"

export const Form = (props) =>{
    return (
        <form onSubmit={props.onSubmit}>
            <FormField 
                text={"Name"} 
                hint={"Insert a name"} 
                type={"text"} 
                name={"name"}
                onChange={props.onChange}
                value = {props.values.name}
                required = {true}
            />
            <FormField 
                text={"E-mail"} 
                hint={"Insert an email , example: test@gmail.com"} 
                type={"email"} 
                name={"email"}
                onChange={props.onChange}
                value= {props.values.email}
                required = {true}
            />
            <br/>
            <SubmitButton text={"Register"}/>
        </form>
    )
}