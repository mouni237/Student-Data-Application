import {React,useState} from 'react'
import './ModelBox.css'
import image from './phone.jpeg'
function ModelBox() {

    const[model,setModel]=useState(false)
  return (
    <div className='box'>
      <div>MODEL BOX</div>
      
      {model?<div className='model'>
      <span>Are You Sure do you Want to Continue</span><br></br><br></br>
      <button onClick={()=>setModel(false)}>YES</button>
      </div>:""}
      <button onClick={()=>setModel(true)}>Confirm</button>

    {/* OVERLAY */}

       <div className='overlay'>
    <button className='xButton'>X</button>
    <img src={image}/>
    <h1>Secure all your  devices</h1>
    <p>Ensure your mobile phone,laptops and other<br/>
    devices are protected online</p>
    <button className='premium'>Premium purchase</button>
   </div>

     </div>
   )
 }
// import {useState,React} from 'react'
// import './Modelbox.css';
// import image from'./phone.jpeg'

// function ModelBox() {
//      const[model,setmodel]=useState(false)
//   return (
    
//     <>
// {/* <div className='name'>ModelBox</div>
// {modal ? <div className='modal'>
//         <span>Are u sure to confirm it?</span><br/>
//          <button onClick={()=>setmodal(false)}>Ok</button>
// </div>:""
// }
//     <button onClick={()=>setmodal(true)}>Confirm</button> */}
   

//    {/* //overlay */}
//    <div className='overlay'>
//     <button className='xButton'>X</button>
//     <img src={image}/>
//     <h1>Secure all your  devices</h1>
//     <p>Ensure your mobile phone,laptops and other<br/>
//     devices are protected online</p>
//     <button className='premium'>Premium purchase</button>
//    </div>

//     </>

//   )
// }


export default ModelBox
