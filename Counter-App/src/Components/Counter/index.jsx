import './index.css'
import { useState } from 'react'

//The concept of useState Hook is used to manage the state of the Counter Component. 
//When we are applying the count+1 and try to display it in the UI, 
//it is not getting displayed in the UI because the value of count is not getting updated in the UI.
//So, to manage the state of the Counter Component, we need to use the useState Hook.
//The useState Hook is used to manage the state of the Counter Component.
const Counter = () => {
    const [count, setCount] = useState(0)

    //These Increment and Decrement Functions can also be declared outside the Counter Function.
    // But, in that case, we need to pass the setCount Function as a Prop to those Functions.
    // But, in this case, we can directly use the setCount Function inside the Increment and Decrement Functions.
    //Either we can use the setCount Function directly inside the onClick Event Handler or we can use the 
    // Increment and Decrement Functions inside the onClick Event Handler.
    function onIncrement() {
        console.log('Increment button clicked')
        setCount(count + 1);
    }


    function onDecrement() {
        console.log('Decrement button clicked')
        setCount(count - 1);
    }


    return (
        <div className="container">
            <h1 className="heading">Counter App</h1>
            <p className="count">{count}</p>

            <div>
                <button className="button" 
                        // onClick={() => setCount(count + 1)}
                        onClick={onIncrement}>
                    Increment
                </button>
                <button className="button" 
                        // onClick={() => setCount(count - 1)}
                        onClick={onDecrement}>
                    Decrement
                </button>
            </div>
        </div>
    )
}
            

export default Counter;