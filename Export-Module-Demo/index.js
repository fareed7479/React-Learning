    import React from "https://esm.sh/react@19.1.1/?dev";
    import ReactDOMClient from "https://esm.sh/react-dom@19.1.1/client?dev";
    import Welcome from "./script.js";


    const rootElement = ReactDOMClient.createRoot(document.getElementById("root"));
    rootElement.render(<Welcome name="John" age={25} gender="Male" />);