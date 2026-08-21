import {useState} from 'react'

import Login from './components/LoginComponent/login'
import Logout from './components/LoginComponent/logout'
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
      {isLoggedIn ? (
        <Login name="John" greeting="Welcome" />
      ) : (
        <Logout />
      )}
      {/* //Functional Component Rendering based on the State Value. */}
      {/* {renderButton()} */}
      {/* Using terinary operator to display the button based on the state value. */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        // <button onClick={() => setIsLoggedIn(true)}>Login</button>
        //Null is Used when i want the user to logged in and couldn't logges out.
        //So, the button will not be displayed when the user is logged in.
        null
      )}
    </div>
  )
}

export default App
