
    import React from "https://esm.sh/react@19.1.1/?dev";
    import ReactDOMClient from "https://esm.sh/react-dom@19.1.1/client?dev";
   
    const student = {
      name: "Ravi",
      age: 20,
      course: "B.Tech"
    };

    const rootElement = ReactDOMClient.createRoot(document.getElementById("root"));
    const element = (
      <div>
        <h1>{student.name}</h1>
        <p>Age: {student.age}</p>
        <p>Course: {student.course}</p>
        <p>Hi Ths=is the Student</p>
      </div>
    );
    rootElement.render(element);

