import './index.css';

//Deaflut Value Rendering Script for Component
// const Userprofiles = () => {
//     return (
//         <div className="user-card-container">
//             <img src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png" alt="User Profile" 
//                  className="avatar"/>

//             <div className="user-details-container">
//                 <div className="user-name">Name</div>
//                 <div className="user-designation">Designation</div>
//             </div>
//         </div>
//     );
// }


//Passing the Props to the Component and Rendering the Values
const Userprofiles = (props) => {

    //Destructuring the Props Values
    const {userDetails} = props;
    const {imageUrl, name, designation} = userDetails;

    return (
        <div className="user-card-container">
            <img src={props.userDetails.imageUrl} alt="User Profile" 
                 className="avatar"/>
            {/* <img src={imageUrl} alt="User Profile" 
                 className="avatar"/> */}
            
            <div className="user-details-container">
                <div className="user-name">{props.userDetails.name}</div>
                <div className="user-designation">{props.userDetails.designation}</div>
            </div>

             {/* <div className="user-details-container">
                <div className="user-name">{name}</div>
                <div className="user-designation">{designation}</div>
            </div> */}
        </div>
    );
}

export default Userprofiles;
