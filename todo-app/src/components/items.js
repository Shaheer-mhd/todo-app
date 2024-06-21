import React from "react";

function Items({ item, Deletion, index }) {
    return (
        <div className="show-item">
            {item}
            <span onClick={() => {
                Deletion(index)
            }}>X</span>
        </div>
    )
}


export default Items