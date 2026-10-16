
// import {React,useState} from 'react'
 
// const Cart=()=>{
// const [product,setProduct]=useState(
//     {
//      productname:"Dress",
//      price:800
//  })
//  function inc(){
//     setProduct(product+1)
// }
//    function dec(){
//     setProduct(product-1)
//    }
// function sCart() {
//   return (
//     <div>
//       <p>SHOPPING CART</p>
//       <form>
//        Productname: <input onChange={product}/><br></br>
//        Price: <input onChange={product}/><br></br>
//        <button>Remove</button><br></br>
//        <button onChange={(inc)}>+</button><button>-</button>
//       </form>
//       {product.price}
//       {product.product.name}
//     </div>
//   )
// }
//  }
// export default Cart

// import React, { useState } from "react";

// const Cart = () => {
//   const [product, setProduct] = useState({
//     productname: "Dress",
//     price: 800,
//     quantity: 1
//   });

//   function inc() {
//     setProduct({
//       ...product,
//       quantity: product.quantity + 1
//     });
//   }

//   function dec() {
//     if (product.quantity > 1) {
//       setProduct({
//         ...product,
//         quantity: product.quantity - 1
//       });
//     }
//   }

//   function sCart() {
//     return (
//       <div>
//         <p>SHOPPING CART</p>

//         <form>
//           Productname:
//           <input
//             value={product.productname}
//             onChange={(e) =>
//               setProduct({
//                 ...product,
//                 productname: e.target.value
//               })
//             }
//           />

//           <br />

//           Price:
//           <input
//             value={product.price}
//             onChange={(e) =>
//               setProduct({
//                 ...product,
//                 price: e.target.value
//               })
//             }
//           />

//           <br />

//           <p>Product: {product.productname}</p>
//           <p>Price: ₹{product.price}</p>
//           <p>Quantity: {product.quantity}</p>

//           <button type="button" onClick={dec}>
//             -
//           </button>

//           <button type="button" onClick={inc}>
//             +
//           </button>

//           <br />

//           <button type="button">Remove</button>
//         </form>
//       </div>
//     );
//   }

//   return sCart();
// };

// export default Cart;

import React, { useState } from "react";
const Cart = () => {
  const [product, setProduct] = useState({
    productname: "",
    price: ""
  });
  const [products, setProducts] = useState([]);
  const [dark, setDark] = useState(false);
  const [rules, setRules] = useState(false);
  const [removeId, setRemoveId] = useState(null);
 
  function addProduct(e) {
    e.preventDefault();

    if (product.productname === "" || product.price === "") {
      alert("Please enter Product Name and Price");
      return;
    }

    const newProduct = {
      id: Date.now(),
      productname: product.productname,
      price: Number(product.price),
      quantity: 1
    };

    setProducts([...products, newProduct]);

    setProduct({
      productname: "",
      price: ""
    });
  }
  function inc(id) {
    setProducts(
      products.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }
  function dec(id) {
    setProducts(
      products.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }
  function removeProduct() {
    setProducts(
      products.filter((item) => item.id !== removeId)
    );

    setRemoveId(null);
  }
  const cheapProducts = products.filter(
    (item) => item.price < 1000
  );


  return (
    <div
      style={{
        // minHeight: "100vh",
        // padding: "30px",
        backgroundColor: dark ? "#222" : "#f5f5f5",
        color: dark ? "white" : "black"
      }}
    >

      <h1>SHOPPING CART</h1>

      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️ " : "🌙 "}
      </button>

      <h2>Add Product</h2>

      <form onSubmit={addProduct}>
        Product Name:
        <input
          type="text"
          value={product.productname}
          onChange={(e) =>
            setProduct({
              ...product,
              productname: e.target.value
            })
          }
        />

        <br /><br />
        Price:
        <input
          type="number"
          value={product.price}
          onChange={(e) =>
            setProduct({
              ...product,
              price: e.target.value
            })
          }
        />
        <br /><br />
        <button type="submit">
          Add Product
        </button>

      </form>
      <h2>All Products</h2>

      {products.length === 0 ? (
        <p> products not added </p>
      ) : (

        products.map((item) => (

          <div
            key={item.id}
            // style={{
            //   border: "1px solid gray",
            //   padding: "15px",
            //   margin: "10px 0",
            //   width: "300px"
            // }}
          >

            <h3>{item.productname}</h3>

            <p>Price: ₹{item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <button onClick={() => dec(item.id)}>
              -
            </button>

            <button onClick={() => inc(item.id)}>
              +
            </button>

            <button
              onClick={() => setRemoveId(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>

          </div>

        ))
      )}

      <h2>Products Below ₹1000</h2>

      {cheapProducts.length === 0 ? (

        <p>No products below ₹1000.</p>

      ) : (

        cheapProducts.map((item) => (

          <p key={item.id}>
            {item.productname} - ₹{item.price}
          </p>

        ))
      )}

      <h2>Shopping Rules</h2>

      <button onClick={() => setRules(!rules)}>
        {rules ? "Hide Rules" : "Show Rules"}
      </button>

      {rules && (

        <div>
          <p>1. Check the product price.</p>
          <p>2. Quantity should be at least 1.</p>
          <p>3. Check before removing a product.</p>
        </div>

      )}

      {removeId !== null && (

        <div
        //   style={{
        //     position: "fixed",
        //     top: "30%",
        //     left: "35%",
        //     backgroundColor: "white",
        //     color: "black",
        //     padding: "30px",
        //     border: "2px solid black"
        //   }}
        >

          <h3>Confirm Remove</h3>

          <p>
            Are you sure you want to remove this product?
          </p>

          <button onClick={removeProduct}>
            Yes, Remove
          </button>

          <button
            onClick={() => setRemoveId(null)}
            // style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>

        </div>

      )}

    </div>
  );
};

export default Cart

