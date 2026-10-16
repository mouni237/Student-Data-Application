// import React from 'react'
// import shoe from './asset/shoe.jpg'
// import './Product.css'
// const Product = () => {
//   return (
//     <>
//     <div classname="containercard">
//       <img src={shoe} className="imgshoe"/><br></br>
//      <h3 className="headingshoe"> Clove Shoe</h3><br></br>
//       $1999.00<br></br>
//       <button>BUY NOW</button>
//     </div>
//     </>
//   )
// }

// export default Product
// import React from 'react'
// // import shoe from './asset/shoe.jpg'
// // import shock from './asset/shocks.jpg'
// import './Product.css'


// const Product = ({ productObj }) => {


//     return (
//         <div style={{ display: "flex" }}>
//             {productObj.map((item) => {
//                 return (
//                     <>
//                         <div className="containerCard">
//                             {/* <img src={shoe} className="imageShoe" /> */}
//                             {/* <img src={shock} className="imageShock" /> */}
//                             <h3 className="headingShoe">{item.name}</h3>
//                             <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
//                                 <strike className="strikeShoe">${item.strikePrice}</strike></div>
//                             <button className="buttonShoe">  BUY NOW</button>

//                         </div>
//                     </>
//                 )
//             })}
//         </div>
//     )
// }

// export default Product
import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ shoesArray, socksArray }) => {
  return (
    <div className="product-page">
      
      <div className="product-section">
        <h2>Shoes Collection</h2>
        <div className="product-row">
          {shoesArray?.map((item) => (
            <div className="containerCard" key={item.name}>
              <img src={item.image} alt={item.name} className="imageShoe" />
              <h3 className="headingShoe">{item.name}</h3>
              <div className="priceContainerShoe">
                <h4 className="priceShoe">₹{item.price}</h4>
                <strike className="strikeShoe">₹{item.strikePrice}</strike>
              </div>
              <button className="buttonShoe" onClick={() => alert(item.name + " selected!")}>
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="product-section">
        <h2>Socks Collection</h2>
        <div className="product-row">
          {socksArray?.map((item) => (
            <div className="containerCard" key={item.name}>
              <img src={item.image} alt={item.name} className="imageShoe" />
              <h3 className="headingShoe">{item.name}</h3>
              <div className="priceContainerShoe">
                <h4 className="priceShoe">₹{item.price}</h4>
                <strike className="strikeShoe">₹{item.strikePrice}</strike>
              </div>
              <button className="buttonShoe" onClick={() => alert(item.name + " selected!")}>
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="product-navigation">
        <Link to="/">
          <button className="nav-btn">Back to Home</button>
        </Link>
      </div>

    </div>
  );
};

export default Product;


