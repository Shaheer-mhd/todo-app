import React, { useState } from "react";

function Sample() {
    const [text, setValue] = useState("")
    const [arr, setarr] = useState([])
    let some
    console.log("%%%%%%%%%%%%%%%%%%%%",arr)
    return(
        <div>
            <h1 align="center"><u>some trails...</u></h1>
            <input type="text" onChange={(e) => {
                some = e.target.value;
            }}></input>
            <button onClick={() => {
                setValue(some)
                setarr(text)
            }}>Click here</button>
            {/* <h4>{arr.map((item) => {
                console.log(item)
            })}</h4> */}
        </div>
    )
}

export default Sample