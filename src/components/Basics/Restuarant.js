import React from 'react'
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from './MenuCard';

const uniqueList =[
    ... new Set(
    Menu.map((curElem)=>{
        return curElem.category;
    })
)]
console.log(uniqueList);
function Restuarant() {
    const [menuData,setMenuData] = React.useState(Menu);
    const fliterItem =(category) =>{
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category === category;
        });
 
        setMenuData(updatedList);
    };
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={()=>fliterItem("breakfast")}>Breakfast</button>
                    <button className="btn-group__item" onClick={()=>fliterItem("lunch")}>Lunch</button>
                    <button className="btn-group__item" onClick={()=>fliterItem("evening")}>Evening</button>
                    <button className="btn-group__item" onClick={()=>fliterItem("dinner")}>Dinner</button>
                    <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button>
                </div>
            </nav>
          <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restuarant;
