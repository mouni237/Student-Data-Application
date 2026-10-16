import {React,useState}from 'react';
import './Accordian.css'
const Accordian=()=>{

    const [open,setOpen]=useState(null)//for accordian
    // function expand(){
    //     setOpen(!open)
    // }
    const accor=[
        {id:1,title:"accordian 1", para:"paragraph 1"},
        {id:2,title:"accordian 2", para:"paragraph 2"}
    ]
    function handleId(id){
       console.log(id)
       setOpen( id)
       setOpen(open==id?null:id)
    }
    return(
        <>
        {/* <p className="head" onClick={expand}>ACCORDIAN 1</p>
        {open?
        <p>Introduces the main idea or goal of the paragraph</p>
        :""}
        <p className="head">ACCORDIAN 2</p>
        {open?
        <p>A short paragraph is a brief block of text that focuses on a single main idea using three to five sentences.</p>
        :""} */}
        {
            accor.map((res)=>{
                return(
                <div className='head'>
                    <p  onClick={()=>handleId(res.id)}>{res.title}</p>
                    {/* {res.id} */}
                    {open==res.id?<p>{res.para}</p>:""}
                    </div>
                )
            })
        }
        </>
    )
}
export default Accordian