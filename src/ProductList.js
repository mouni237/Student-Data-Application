// import ProductCard from "./ProductCard";

// function ProductList({ products }) {
//   return (
//     <div>
//       {products.map((product) => (
//         <ProductCard product={product} />
//       ))}
//     </div>
//   );
// }

// export default ProductList;

import React from "react";
import { Grid, Box } from "@mui/material";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      
        {products.map((product) => (
        
            <ProductCard product={product} />
       
        ))}
    
    </Box>
  );
}

export default ProductList;
