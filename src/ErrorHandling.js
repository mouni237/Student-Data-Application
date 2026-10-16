import React,{useState} from 'react'

function ErrorHandling({data}) {
    console.log(data)
const [value,setValue]=useState(
    {
        name:"",
        email:"",
        number:""
    }
 )
 const [error,setError]=useState(
    {
        nameError:"",
        emailError:"",
        mobileError:""
    }
 )


 function change(event){
   setValue({ ...value,[event.target.name]:event.target.value})
        
 }
    function handleSubmit(event){
    event.preventDefault();

    if(value.name==""){
        setError({...error, nameError:"Fiels is Required" })
    }else if(value.name.length<3){
     setError({...error,nameError:"Less than 3 letters"})
    }

}
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type="text" placeholder="enter ur name" name="name" onChange={change} /><br></br>
      <span style={{color:'red'}}>{error.nameError}</span><br/>
      <input type="email" placeholder="enter ur email" name="email"/>
    <input type="number" placeholder="enter ur mobile" name="mobile"/><br></br>
    <button type="submit">SUBMIT</button>
    </form>
    </div>
  )
}

export default ErrorHandling
