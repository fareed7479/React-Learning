import './App.css'
import UserProfile from './components/UserProfiles/index'


//This App function is Used to render only the Default Values of the Component
//and the componet
// function App() {
//   return (
//     <>
//       <div className="list-container">
//         <h1 className="title">Users List</h1>
//         <UserProfile/>
//       </div>
//     </>
//   )
// }



//This App function is Used to render the Props Values of the Component
//This is to render one user using the props values passed to the component 
// and rendering the values in the component
// const userDetailsList = {
//   imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
//   name: 'John Doe',
//   designation: 'Software Engineer',
// }

// function App() {
//   return (
//     <>
//       <div className="list-container">
//         <h1 className="title">Users List</h1>
//         <UserProfile userDetails={userDetailsList}/>
//       </div>
//     </>
//   )
// }

//This App function is Used to render the Props Values of the Component
//This is to render multiple values of the user using the props values passed to the component
//The multiple values are stored in a object and the object is passed to the component and the values are destructured in the component and rendered in the component

const userDetailsList = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'John Doe',
    designation: 'Software Engineer'
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Jane Smith',
    designation: 'Product Manager'
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Michael Johnson',
    designation: 'UX Designer'
  }
]

//Since there are more users , these users are displayed using the map or the for loop

function App() {
  return (
    <>
      <div className="list-container">
        <h1 className="title">Users List</h1>
        {/* //Using the map function */}
        {/* {userDetailsList.map((user) => (
          <UserProfile key={user.name} userDetails={user} />
        ))} */}

        {/* Using the for loop */}
        {(() => {
          const userProfiles = [];
          for (let i = 0; i < userDetailsList.length; i++) {
            const user = userDetailsList[i];
            userProfiles.push(
              <UserProfile key={user.name} userDetails={user} />
            );
          }
          return userProfiles;
        })()}
      </div>
    </>
  )
}
export default App
