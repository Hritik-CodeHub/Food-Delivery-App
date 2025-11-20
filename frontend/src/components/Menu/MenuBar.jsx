import React from 'react'
import "./MenuBar.css"
const MenuBar = () => {
    return (<>
        <div className="menuBar-container ">
            <div className='menuBar-items'>
                <button className="nav-link active"  >Offers</button>

                <button className="nav-link active"  >Burgers</button>

                <button className="nav-link active"  >Fries</button>

                <button className="nav-link active"  >Snacks</button>

                <button className="nav-link active"  > Cold drinks</button>

                <button className="nav-link active"  > Happy Meal®</button>

                <button className="nav-link active"  > Cold drinks</button>

                <button className="nav-link active"  > Hot drinks</button>
            </div>
        </div>
    </>
    )
}

export default MenuBar