import {React,useState} from "react";

const Project=()=>{
     const[value,setValue]=useState({
        id:1,
        name:"Mounika",
        age:19
     });
     const[form,setForm]=useState({
        id:0,
        name:"",
        age:0
     });
    // const[value,setValue]=useState(false);
    //  const [input,setInput]=useState("Your data visible here")
    //  const [email,setEmail]=useState("Email")
    //  const [age,setAge]=useState("age")
//     function inc(){
//         // setValue(value+10)    INCREMENT
//         setValue(!value)
//     // if(value==0){
//     //     setValue(1)
//     // }else{                    NORMAL IF ELSE
//     //     setValue(0)
//     // }

//     // setValue(value==0?1:0)    TERNARY OPERATOR     
//     }
//     function getData(event){
//     //    console.log(event.target.value) 
//        setInput(event.target.value)
//     }
//     function data(event){
//     //    console.log(event.target.value) 
//        setEmail(event.target.value)
//     }
//     function d(event){
//     //    console.log(event.target.value) 
//        setAge(event.target.value)
//     }
// //   console.log(value)
    //  function handlesubmit(event){
    //       event.preventDefault();
    //     //   alert(input)
    //     //   alert(email)
    //     //   alert(age)
    //  }
     
     
    function change(event){
        // setValue({...value,name:event.target.value})
         setValue({ ...value,[event.target.name]:event.target.value})
        
    }
    function submit(event){
        event.preventDefault();
       setForm({...form,name:value.name,age:value.age})
       
     }
    // function next(event){
    //       setValue({...value,age:event.target.value})
    // }
    return(
      <div>
        {/* <div style={{backgroundColor:value?"pink":"white",height:"100vh"}}>
         {/* {value} */}
        {/* <h1> Mouni</h1> */}
         {/* <p onMouseOver={inc}>A paragraph is a distinct unit of writing consisting of one or more sentences that develop a single central idea or topic.</p> */}
         {/* <button onClick={inc}>INCREMENT</button> */}
         {/* <button onClick={inc}>TOGGLE    </button> */}
         {/* <button onClick={inc}>{value?"🌞":"🌙"}    </button> */}
         {/* <span style={{cursor:"pointer"}}onClick={inc}>{value?"🌞":"🌙"}    </span>  */}
        {form.name}
        {form.age}

        <form onSubmit={submit}>
            <label>Name</label><input onChange={change} name={"name"}placeholder='enter ur name'/><br></br>
             <label>age</label><input onChange={change} name={"age"}placeholder='enter ur age'/><br></br>
            
          {/* Name:  <input onChange={getData}/><br></br>
          Email:  <input onChange={data}/><br></br>
          Age:  <input onChange={d}/><br></br> */}
            <button type="Submit">Submit</button>
        </form>
        {/* {input} */}
       
        </div>
    )
}
export default Project