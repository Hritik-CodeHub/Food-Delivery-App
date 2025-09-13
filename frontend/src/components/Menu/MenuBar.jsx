import React from 'react'
import "./MenuBar.css"
const MenuBar = () => {
    return (<>
        <div className="menuBar-container ">
            <div className='menuBar-items'>
                <button class="nav-link active"  >Offers</button>

                <button class="nav-link active"  >Burgers</button>

                <button class="nav-link active"  >Fries</button>

                <button class="nav-link active"  >Snacks</button>

                <button class="nav-link active"  > Cold drinks</button>

                <button class="nav-link active"  > Happy Meal®</button>

                <button class="nav-link active"  > Cold drinks</button>

                <button class="nav-link active"  > Hot drinks</button>
            </div>
        </div>
    </>
    )
}

export default MenuBar