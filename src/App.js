import React, {useEffect} from "react"
import { useDispatch} from "react-redux"

import { HomePage } from "./components/pages/HomePage"
import { initUserAsync } from "./actions/userActions"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initUserAsync())
  }, [dispatch])

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
