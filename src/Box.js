import React, { useEffect, useState } from "react";

const Box = (props)=>{
const [style, setStyle] = useState({});

useEffect(()=>{
    console.log('박스 키우기');
    setStyle(props.createBoxStyle());
},[props.createBoxStyle]);

return(
    <div style={style}></div>
)
}

export default Box;