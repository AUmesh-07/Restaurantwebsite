import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import Menucard from './Menucard'
import Navbar from './Navbar'

const uniqueList = [
  ...new Set(Menu.map((curElem)=>{
  return curElem.category 
})
),"All",
]
 console.log(uniqueList);


const Resturant = () => {
 const[menuData,setMenuData] = React.useState(Menu);
 const [menuList,setMenuList]  = useState(uniqueList)
 const Filteritem = (category)=>{

  if (category ==="All") {
    setMenuData(Menu);
    return
  }
  const updatedlist = Menu.filter((curElem)=>{
    return curElem.category===category;
  })
 setMenuData(updatedlist)
 }
  return (                         
<>

<Navbar Filteritem ={Filteritem} menuList={menuList}/>
<Menucard mdata ={menuData} />
</>  

)
}
 
export default Resturant 