    import React from "https://esm.sh/react@19.1.1/?dev";
    import ReactDOMClient from "https://esm.sh/react-dom@19.1.1/client?dev";

    const Welcome = (props) => {
        console.log(props);
        const { name, age, gender } = props;

        //Either we can use props.name or we can destructure the props 
        // and use name directly
        //Destructuring is a process of unpacking values from arrays or properties from objects into distinct variables.
        return(
            <div>
                <h1>Hi {name}</h1>
                <p>How's it Going Through</p> 
                <p>Ur Age is : {age} , Ur Gender is: {gender}</p>
                <p>Yep , That's it</p>
            </div>
        );
    }

    const rootElement = ReactDOMClient.createRoot(document.getElementById("root"));
    rootElement.render(<Welcome name="John" age={25} gender="Male" />);
    //The values of the props can be passed as attributes to the component. 
    // The values can be of any type, like string, number, boolean, array, object, etc.