import React, { useState, useMemo } from "react";

function Counter() {
  const [state, setState] = useState({ count: 0 });

  const countState = useMemo(() => state, [state]); 

  const increment = useMemo(() => () => {
    const newCount = countState.count + 1;
    return { count: newCount };
  }, [countState]); 

  const decrement = useMemo(() => () => {
    const newCount = Math.max(0, countState.count - 1);
    return { count: newCount };
  }, [countState]); 


  const reset = useMemo(() => () => ({ count: 0 }), [countState]); 
  
  const setCountState = (newCountState) => {
    setState((prevState) => ({ ...prevState, ...newCountState })); 
  };

  return (
    <div>
      <h1>Count: {countState.count}</h1>

      <button className="custom-btn" onClick={() => setCountState(decrement())}>Decrement</button>
      <button className="custom-btn" onClick={() => setCountState(reset())}>Reset</button>
      <button className="custom-btn" onClick={() => setCountState(increment())}>Increment</button>
      
    </div>
  );
}

export default Counter;
