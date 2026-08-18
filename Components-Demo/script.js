    import React from "https://esm.sh/react@19.1.1/?dev";
    import ReactDOMClient from "https://esm.sh/react-dom@19.1.1/client?dev";

    const Welcome = () => {
        return(
            <div>
                <h1>Hi User</h1>
                <p>How's it Going Through</p>   
            </div>
        );
    }

    const rootElement = ReactDOMClient.createRoot(document.getElementById("root"));
    rootElement.render(<Welcome />);