import { useState } from "react";

function List(props) {
    return (
      <>  
        {
          props.dbnm.map((val, idx)=>{
            return(
              <li><strong>{val.strong}</strong><span>{val.span}</span></li>
            )
          })
        }
      </>
       
    )
}



export default List
