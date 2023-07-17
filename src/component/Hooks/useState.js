import React, { useState } from "react";
import "./style.css";

const UseState = () => {
    const initialdata = 10 
const [mynum, setmynum] = useState(initialdata)
 console.log(setmynum);
  return (
    <>
      <div className="center_div">
        <p>{mynum}</p>
        <div class="button2" onClick={()=>setmynum( mynum + 1 )}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2" onClick={()=>  mynum > 0 ? setmynum( mynum - 1 ) : setmynum(0)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;