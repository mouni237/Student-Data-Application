import react from "react";
import { useState } from "react";

function Header(){
    const [Status,setStatus]=useState(" ");
    const cTime=new Date().toLocaleTimeString();
    console.log(cTime);
    // const cDate=new Date().toLocaleDateString();
    // console.log(cDate);
    // let time=9.00;
    if(cTime>="4:11:00 pm" && Status != "Pink"){
        console.log("offline");
            setStatus("Pink")
        
    }
    // if(cTime>="15:00:00"){
    //     console.log("online");
    // }else{
    //     console.log("offline");
    // }
    return(
        <>
        <div style={{width:"100%", height:"100vh", backgroundColor:Status}}>
        HEADER REACT
        <p>{cTime}</p>
        <p>{Status}</p>
        <button disabled={Status == "Pink"? true:false}>TEST</button>
        </div>
        </>
    )
}
export default Header;