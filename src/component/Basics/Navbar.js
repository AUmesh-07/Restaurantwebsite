import React from 'react'

const Navbar = ({Filteritem , menuList}) => {
  return (
    <>
 
<nav className='navbar'>
<div className='btn-group'>
   {
    menuList.map((curElem)=>{
        return(
            <button className='btn-group__item' onClick={()=>Filteritem(curElem)}>{curElem}</button>
        )
    })
   }


</div>

</nav>
    
    </>
  )
}

export default Navbar