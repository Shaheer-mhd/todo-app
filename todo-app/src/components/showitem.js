import React, { useState } from "react";
import './showitem.css'
import Items from "./items";

function Showitem({ cont,showErrorMessage }) {
    const [prevValue, setprevValue] = useState("")
    const [arrvalue, setArr] = useState([])

    function Deletion(index) {
        arrvalue.splice(index, 1)
        setArr([...arrvalue])
    }
    
    
    console.log(arrvalue,cont);
    console.log(arrvalue.includes(cont));
    if (arrvalue.includes(cont) ) {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        showErrorMessage(cont)
    }else {
        if (cont !== "" && cont !== prevValue) {
            setArr([...arrvalue, cont])
            setprevValue(cont)
        }
    }
    // if (cont === prevValue) {
    //     message("Duplication not Allowed")
    // }

    return (
        <div>
            {arrvalue.map((item, index) => {
                return (
                    <Items key={index} item={item} index={index} Deletion={Deletion} />
                )
            })}
        </div>
    )
}

export default Showitem