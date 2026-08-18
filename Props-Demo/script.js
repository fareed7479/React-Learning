    import React from "https://esm.sh/react@19.1.1/?dev";
    import ReactDOMClient from "https://esm.sh/react-dom@19.1.1/client?dev";

    const Welcome = (props) => {

        const { name, age, gender } = props;
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