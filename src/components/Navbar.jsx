import { useEffect, useState } from 'react';
import '../style/navbar.css'

function Navbar({changeSection,cartClicked}){

    const [isNavClicked, setIsNavClicked] = useState(false)
    let [featured, isFeaturedClicked] =  useState("Home")


    const navItems = [
        {
            itemName:"HOME",
            link:"home",
            id:0
        },
        {
            itemName:"SHOP",
            link:"shop",
            id:1
        },
        {
            itemName:"SALE",
            link:"sale",
            id:2
        },
    ]

    const change = () =>{

    }





    return(
        <>
        <nav>
            <h1 className="logo">
                E-Mart
            </h1>

            <div className="nav-icons">
                <ul className="nav-list">

                { navItems.map((item,index)=> (
                    <div className="nav-items">
                        <a 
                            href={item.link} 
                            key={index} 
                            onClick={(e) => {
                            
                                isFeaturedClicked(item.itemName)
                                setIsNavClicked(false)   
                                return changeSection(e,item.id)
                            }} 
                        >{item.itemName}</a>
                    </div>
                    ))
                }
                
                </ul>

                <span 
                class="material-symbols-outlined menu"
                onClick={()=>setIsNavClicked(!isNavClicked)}
                >menu</span>

                <a 
                class="material-symbols-outlined" 
                style={{textDecoration:"none",color:"#212F3C"}} 
                onClick={cartClicked} 
                href="#cart">local_mall</a>
            </div>
        </nav>

        <div className="r-nav" style={
            {
                left: isNavClicked ? '0px' : '-300px'
            }
            }>
            { navItems.map((item,index)=> (
                
                <a
                className='r-nav-item' 
                href={item.link} 
                key={index} 
                onClick={(e) => {
                    setIsNavClicked(false)   
                    return changeSection(e,item.id)
                }} 
                >{item.itemName}
                </a>
        
            ))
            }

            <h1>E-Mart</h1>
        </div>
        <div class="btn-group-vertical" role="group" aria-label="qq">
            <button type="button" class="btn btn-secondary">First One</button>
            <button type="button" class="btn btn-secondary">Second One</button>
            <div class="btn-group" role="group">
                <button
                    id="dropdownId"
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    More
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                    <a class="dropdown-item" href="#">First Dropdown</a>
                    <a class="dropdown-item" href="#">Second Dropdown</a>
                </div>
            </div>
        </div>
        
        </>
    )
}


export default Navbar;