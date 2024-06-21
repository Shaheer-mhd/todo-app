import React, { useState } from "react";
import Showitem from "./showitem";
import './home.css'

function Home() {
    const [listVal, setlistVal] = useState("")
    const [inputboxvalue, setinputboxvalue] = useState("")
    const [errorMessage, seterrorMessage] = useState("")
    let showErrorMessage=(message)=> {
        seterrorMessage(message+" Already Exist")
        console.log(message+" Already Exist");
    }
    return (
        <div id="home">
            <div className="home-page"> 
                <h1>TODO LIST</h1>
            </div>
            {/* <h4>{errorMessage}</h4> */}
            <hr />

            <input type="text" placeholder="add item..."
                onChange={(e) => {
                    setinputboxvalue(e.target.value)
                }}  value={inputboxvalue} ></input>
            <div className="buttonDiv">
                <button id="add-btn"
                    onClick={function () {
                        if (inputboxvalue) {
                            setlistVal(inputboxvalue)
                            setinputboxvalue("")
                        
                        }
                    }}>ADD</button>
            </div>

            <Showitem cont={listVal} showErrorMessage={showErrorMessage} />

        </div>
    )
}

export default Home