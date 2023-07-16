import React, {useState} from "react"

import { FormTemplate } from "../templates/FormTemplate"
import { InfoTemplate } from "../templates/InfoTemplate"

export const HomePage = () =>{
    const [info, setInfo] = useState({
        name: '',
        email: ''
    })
    const [state, setState] = useState([])

    const handleChange = (event) =>{
        const name = event.target.name  
        const value = event.target.value
        setInfo({...info, [name] : value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        setState([...state, info])
        setInfo({name: '', email: ''})
    }

    return(
        <div>
            <FormTemplate onChange={handleChange} onSubmit={handleSubmit} values={info}/>
            <hr />
            {
                state.map((data, id) =>(
                    <InfoTemplate info={data} key={id}/>
                ))
            }
        </div>
    )
}