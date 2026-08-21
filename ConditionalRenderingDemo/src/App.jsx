import {useState} from 'react'

import login from './components/LoginComponent/login'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)



  //Conditional Rendering of the Button based on the State Value.
  // const renderButton = () =>{

  //   //we are using a function to display the based on if statement.
  //   if (isLoggedIn) {
  //     return <button onClick = {()=> setIsLoggedIn(false)}>Logout</button>
  //   }
  //   return <button onClick={() => setIsLoggedIn(true)}>Login</button>
  // }
  return (
    <div className="container">
      <h1>Hello, User</h1>
      {/* //Functional Component Rendering based on the State Value. */}
      {/* {renderButton()} */}
      {/* Using terinary operator to display the button based on the state value. */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  )
}

export default App
