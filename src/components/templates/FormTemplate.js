import { Form } from "../organisms/FormUsers"

export const FormTemplate = (props) =>{
    return(
        <center>
            <h1>Form</h1>
            <p>Please fill the form</p>
            <Form onChange={props.onChange} onSubmit={props.onSubmit} values={props.values}/>
        </center>
    )
}