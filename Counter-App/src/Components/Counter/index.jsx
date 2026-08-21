import './index.css'
import { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <h1 className="heading">Counter App</h1>
            <p className="count">{count}</p>

            <div>
                <button className="button" 
                        onClick={() => setCount(count + 1)}>
                    Increment
                </button>
                <button className="button" 
                        onClick={() => setCount(count - 1)}>
                    Decrement
                </button>
            </div>
        </div>
    )
}
            

export default Counter;