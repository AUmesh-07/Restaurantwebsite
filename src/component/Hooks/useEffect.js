import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
    const initialdata = 10 
const [mynum, setmynum] = useState(initialdata)
  
 useEffect(() => {
    document.title = `chats  ${mynum}`
    })
 

  

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
      </div>
    </>
  );
};

export default UseEffect;