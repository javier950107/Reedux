import React, {useEffect} from "react"
import { useDispatch} from "react-redux"

import { HomePage } from "./components/pages/HomePage"
import { addUser } from "./redux/userSlice"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data) =>{
            dispatch(addUser(data))
        } )
        .catch((error) => console.log(error))
  // eslint-disable-next-line
  }, [])

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
