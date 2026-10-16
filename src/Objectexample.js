import React from "react";
const Objectexample=()=>{

    const student=[{
        
        id:1,
        name:"Mouni",
        age:19,
        dept:"B.Tech",
        marks:100
    },
    {
        id:2,
        name:"Harshuu",
        age:20,
        dept:"CYBER",
        marks:99
}
]
// const data=student.map((i)=>{
//     return(
//         <>
//         {console.log(i.name)}
//         </>
//     )
// })


//filters function

const numbers=[1,2,3,4,5,6];
const filtered=numbers.filter(
    function(x){
        return x>2
    }
)

console.log(filtered)


// const datamark=student.filter(
//     function(i){
//         return i.marks>95
//     }
// )

const datamark=student.filter((i)=> i.marks>95)
console.log(datamark)


return(
    <>
    
    {/* {student.id}<br/>
    {student.name}<br/>
    {student.dept} */}
    {/* {student.map((i)=>{ */}
        {/* return(<> */}
        <table border="1">
            
               <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Dept</th>
                <th>Mark</th>
                </tr>
                </thead> 
            <tbody>
                <tr>
                    <td>MOUNI</td>
                    <td>19</td>
                    <td>B.TECH</td>
                    <td>100</td>
                </tr>
            
                <tr>
                    <td>HARSHU</td>
                    <td>19</td>
                    <td>CYBER</td>
                    <td>99</td>
                </tr>
            </tbody>
            </table>
            {datamark.map=((i)=>{
    return(
        <>
        {i.name}
        </>
    )
})}
            
            </>) 
    {/* })} */}
//     </>
// )


}
export default Objectexample;