import React from 'react';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// const App = () => {
//   return (
//     <div>
//       <br />
//       <Paper 
//         elevation={7} 
//         style={{ width: '50%', textAlign: 'center', padding: '7%', height: '48%', margin: 'auto' }}
//       >
        
//         <Box sx={{
//           width: 100,
//           height: 70,
//           borderRadius: '50%', 
//           bgcolor: '#eaeaff',
//           margin: 'auto',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           marginBottom: '30px',
//         }}>
//           <LockOutlinedIcon sx={{ color: '#4f46e5', fontSize: 45 }} />
//         </Box>

        
//         <Typography 
//           variant="h5" 
//           color="primary" 
//           fontWeight="bold" 
//           style={{ marginBottom: '30px' }}
//         >
//           Welcome User!
//         </Typography>

        
//         <div style={{ display: 'flex', gap: '30px', flexDirection: 'column', width: '100%', marginBottom: '40px' }}>
//           <TextField 
//             variant="outlined" 
//             label="Username" 
//             helperText="Username is required" 
//             onChange={(e) => console.log(e.target.value)} 
//             required 
//           />
//           <TextField 
//             variant="outlined" 
//             type="password" 
//             label="Password" 
//             helperText="Password is required" 
//             required 
//           />
//           <Button variant="contained">
//             Sign Up
//           </Button>
//         </div>

        
//         <div>
          
//           <a href="#forgot-password" style={{ color: '#4f46e5', textDecoration: 'none' }}>
//             Forgot Password?
//           </a>
//         </div>

//       </Paper>
//     </div>
//   );
// };

// export default App;

// import Parent from "./Parent";

// function App() {
//   const student = {
//     name: "Arun",
//     department: "MERN Stack"
//   };

//   return <Parent student={student} />;
// }

// export default App;

// import EmployeePage from "./EmployeePage";

// function App() {
//   const employee = {
//     name: "Priya",
//     role: "Frontend Developer",
//     salary: 30000,
//     skills: ["React", "JavaScript", "CSS"]
//   };

//   return <EmployeePage employee={employee} />;
// }

// export default App;


// import UserList from "./UserList";

// function App() {
//   return (
//     <div style={{ textAlign: "center"}}>
//       <h1>User Directory</h1>
//       <UserList />
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Dashboard from "./Dashboard";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return <Dashboard products={products} loading={loading} />;
// }

// export default App;


import { useEffect, useState } from "react";
 import axios from "axios";
 import StudentList from "./StudentList";
function App(){
  const [data, setData] = useState([]);
  
useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
    
  }, []);
  
  return <StudentList data={data}  />;
  
 }
export default App



































// import React, { useEffect } from 'react';
// import axios from 'axios';
// import Input from './Input';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';

// function App() {
//   // If you need to run side effects (like an API call with axios), you do it here:
//   useEffect(() => {
//     // axios.get('...').then(res => console.log(res.data))
//   }, []);

//   return (
//     <div>
      
//     <Box 
//       component="form" 
//       sx={{ 
//         '& > :not(style)': { m: 1, width: '25ch' },
//         display: 'flex',
      
//         flexDirection: 'column' // Oru input-ku keel innoru input vara
//       }} 
//       noValidate 
//       autoComplete="off"
//     >
//       {/* Username Input */}
//       <TextField 
//         id="username-filled" 
//         label="Username" 
//         variant="filled" 
//       />
      
//       {/* Password Input (type="password" mukkiyam) */}
//       <TextField 
//         id="password-filled" 
//         label="Password" 
//         type="password" 
//         variant="filled" 
//       />
//     </Box>
  

//     </div>
//   );
// }

// export default App;















// // import logo from './logo.svg';
// // import './App.css';
// // import Header from'./Header';
// // import Objectexample from './Objectexample';
// // import Project from './Project';
// // import Task from './Task';
// // import './Project.css'
// // import Accordian from './Accordian';
// // import ModelBox from './ModelBox';
// // import Object from './Object';
// // import Cart from './Cart';
// // import Student from './Student';
// // import Manage from './Manage';
// // import ErrorHandling from './ErrorHandling';
// // import Product from './Product';
// // import Home from './Home';
// // import {Routes,Route,Link} from 'react-router-dom';
// // import Login from './Login';
// // import shoe from './asset/shoe.jpg'
// // import shock from './asset/shocks.jpg'
// // // import './Accordian.css'

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // function App(){
// //   // const obj={
// //   //   name:"TestName",
// //   //   year:2026
// //   // }
// //    const productObj = [{
// //     name: "Adidas",
// //     price: "3000",
// //     strikePrice: "5000",

// //   },
// //   {
// //     name: "Puma",
// //     price: "2500",
// //     strikePrice: "3500",

// //   },
// //   {
// //     name: "Nike",
// //     price: "4000",
// //     strikePrice: "6000",
// //      image: './shocks'
// //   }]
// //   const productSOCK = [{
// //     name: "Cotton SOCKS",
// //     price: "3000",
// //     strikePrice: "5000",
    
// //   },
// //   {
// //     name: "LINEN",
// //     price: "2500",
// //     strikePrice: "3500",

// //   },
// //   {
// //     name: "VELVET",
// //     price: "4000",
// //     strikePrice: "6000",

// //   }]
// //   return(
// //     <div className="App">
// //       {/* <Header/> */}
// //       {/* <Objectexample/> */}
// //       {/* <useState/> */}
// //       {/* <Project/> */}
// //       {/* <Accordian/> */}
// //       {/* <ModelBox/> */}
// //       {/* <Object/> */}
// //       {/* <Task/> */}
// //       {/* <Cart/> */}
// //       {/* <Student/> */}
// //       {/* <Manage/> */}
// //       {/* <ErrorHandling data={"test"}/> */}
// //       {/* <ErrorHandling data={obj}/> */}
// //       {/* <Product/> */}
// //       {/* <Login/> */}
// //       {/* <Product productObj={productObj} />
// //       <Product productObj={productSOCK} /> */}

// //       <Routes>
// //         <Route path="/" element={<Home/>}/>
// //         <Route path='/product' element={<Product productObj={productObj}/>}/>
// //        <Route path="/login" element={<Login />} />
// //         <Route path="/errorhandling" element={<ErrorHandling />} />
// //       </Routes>
// //       <Link to='/'>Home</Link>
// //       <Link to='/product'>Product</Link>
// //       <Link to='/ErrorHandling'>ErrorHandling</Link>
// //       <Link to='/Login'>Login</Link>
// //       <Home/>
// //     </div>
// //   );
// // }
// // export default App;



// // import logo from './logo.svg';
// import './App.css';
// // import Login from './Login.js'
// // import Product from './Product'
// // import Home from './Home'
// // import Counter from './Counter.js'
// // import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

// // import shoes from "./asset/shoe.jpg";
// // import sh from "./asset/sh.jpg";
// // import oe from "./asset/oe.webp";
// // import p from "./asset/p.jpg";
// // import r from "./asset/r.jpg";
// // import shocks from "./asset/shocks.jpg";
// // import GetData from './GetData.js';
// import Task1 from './Task1.js';


// function App() {
//   //    const productShoes = [{
//   //   name: "Adidas",
//   //   price: "3000",
//   //   strikePrice: "5000",
//   //   image: shoes
//   // },
//   // {
//   //   name: "Puma",
//   //   price: "2500",
//   //   strikePrice: "3500",
//   //   image: sh
//   // },
//   // {
//   //   name: "Nike",
//   //   price: "4000",
//   //   strikePrice: "6000",
//   //  image: oe
//   // }]
//   // const productSocks = [{
//   //   name: "Cotton SOCKS",
//   //   price: "3000",
//   //   strikePrice: "5000",
//   //  image: p
//   // },
//   // {
//   //   name: "LINEN",
//   //   price: "2500",
//   //   strikePrice: "3500",
//   //   image: r

//   // },
//   // {
//   //   name: "VELVET",
//   //   price: "4000",
//   //   strikePrice: "6000",
//   //  image: shocks
//   // }]
//   return (
//     <>
//     {/*<Managament/>*/}
//       {/*<Manager/>*/}
//      {/*<Header/> 
//   {/*<ArrowFunction/>*/}
//   {/*<ObjectExample/>*/}
//   {/*<Project/>*/}
//    {/*<Test/>*/}
//   {/*<Accordion/>*/}
//   {/*<Modalbox/>*/}
//   {/*<Spread/>*/}
//    {/*<Task/>*/}
//    {/* <GetData/> */}
//    <Task1/>
//    {/*<ErrorHandling data={obj}/>*/}
//     {/*<Product productObj={productObj} />
//     <Product productObj={productSOCK} />*/}
    
//    {/* <Routes>
//   <Route path="/" element={<Home/>}/>
//   <Route path="/login" element={<Login />} /> */}
  
//   {/* Pass both shoes and socks to the same component */}
//   {/* <Route 
//     path='/product' 
//     element={
//       <Product 
//         shoesArray={productShoes} 
//         socksArray={productSocks} 
//       />
//     }
//   />
// </Routes> */}

// {/* Bottom Navigation Links */}
// {/* <Link to='/'>Home</Link><br></br>
// <Link to='/product'>Products</Link><br></br>
// <Link to='/Login'>Login</Link> */}

    
   
//   </>
//   );
// }
// export default App;