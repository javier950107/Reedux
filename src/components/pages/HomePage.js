import React, {useState} from "react"
import { useSelector } from "react-redux"

import { FormTemplate } from "../templates/FormTemplate"
import { InfoTemplate } from "../templates/InfoTemplate"

import { addUserAsync } from "../../actions/userActions"
import { useDispatch} from "react-redux"

export const HomePage = () =>{
    
    const dispatch = useDispatch()
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
        dispatch(addUserAsync(info))
    }

    return(
        <div>
            <FormTemplate onChange={handleChange} onSubmit={handleSubmit} values={info}/>
            <hr />
            {
                user.map((data, id) =>(
                    <InfoTemplate info={data} key={id}/>
                ))
            }
        </div>
    )
}