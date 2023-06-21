import React from 'react'
//import useState first
import { useState } from 'react'


function Counter() {
//value to be manipulated
    const [count, setCount] = useState(0);
    


    //increment function
    const increment = () => {
        setCount(count + 1);
        
        if (count > 10) {
            // setCount(0)
            // what you want to do
            reset()
        }
        
      };
      //decrement function
      const decrement = () => {
        setCount(count - 1);
      };
      //reset
      const reset = () => {
        setCount(0);
        alert("hello");
      };

    return (
        <div>
            {/* {count > 10? reset() : ""} */}
            {/* increase the font size onClick */}
            <h1 style={{fontSize: 50+count}} className="">Count:{count}</h1>
            <button onClick={increment} >Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    )
}

export default Counter
