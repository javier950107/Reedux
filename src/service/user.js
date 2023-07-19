
export const fetchDataGet = async (baseUrl) =>{
    const response = await fetch(baseUrl,{
        method : 'GET',
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    return response
}

export const fetchDataPost = async (baseUrl, body = null) =>{
    const response = await fetch(baseUrl,{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    })

    return response
}