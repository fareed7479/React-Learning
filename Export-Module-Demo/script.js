
    const Welcome = ({ name, age, gender }) => {
        // console.log(props);
        // const { name, age, gender } = props;
        console.log(name, age, gender);
        //Either we can use props.name or we can destructure the props 
        // and use name directly
        return(
            <div>
                <h1>Hi {name}</h1>
                <p>How's it Going Through</p> 
                <p>Ur Age is : {age} , Ur Gender is: {gender}</p>
                <p>Yep , That's it</p>
            </div>
        );
    }

    export default Welcome;
   
    //The values of the props can be passed as attributes to the component. 
    // The values can be of any type, like string, number, boolean, array, object, etc.