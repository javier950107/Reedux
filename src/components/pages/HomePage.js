import React, {useState} from "react"
import { useSelector } from "react-redux"

import { FormTemplate } from "../templates/FormTemplate"
import { InfoTemplate } from "../templates/InfoTemplate"

export const HomePage = () =>{
    
    const user = useSelector((state) => state.user)

    const [info, setInfo] = useState({
        name: '',
        email: ''
    })

    const handleChange = (event) =>{
        const name = event.target.name  
        const value = event.target.value
        setInfo({...info, [name] : value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        setInfo({name: '', email: ''})
    }

    return(
        <div>
            <FormTemplate onChange={handleChange} onSubmit={handleSubmit} values={info}/>
            <hr />
            {

                <InfoTemplate info={user}/>
                /*(!loading)? user.map((data, id) =>(
                    <InfoTemplate info={data} key={id}/>
                )) : <p>Loading...</p>*/
            }
        </div>
    )
}