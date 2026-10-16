// function ProductCard({ product }) {
//   return (
//     <div style={{ textAlign: "center",border:"2px solid grey",width:"60%",marinleft:"80%",borderradius:"30px"}}>
//       <img src={product.image} alt={product.title} width="100" />
//       <h3>{product.title}</h3>
//       <p>Price: ${product.price}</p>
//     </div>
//   );
// }

// export default ProductCard;

import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        margin: "auto", 
        textAlign: "center",
        borderRadius: "16px", // Replaces your custom borderradius
        border: "1px solid #e0e0e0", 
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": { 
          transform: "translateY(-4px)", // Subtle lift effect on hover
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)" 
        }
      }}
    >
      {/* Box layout container wrapper around image to handle standard constraints */}
      <Box sx={{ display: "flex", justifyContent: "center", pt: 3 }}>
        <CardMedia
          component="img"
          sx={{ 
            width: 120, 
            height: 120, 
            objectFit: "contain" 
          }}
          image={product.image || "https://placeholder.com"}
          alt={product.title}
        />
      </Box>

      <CardContent>
        {/* Product Title */}
        <Typography 
          variant="h6" 
          component="h3" 
          noWrap // Cuts off extra text cleanly with "..." if title is too long
          sx={{ fontWeight: "600", fontSize: "1.1rem", mb: 1 }}
        >
          {product.title}
        </Typography>

        {/* Product Price */}
        <Typography 
          variant="body1" 
          color="primary" 
          sx={{ fontWeight: "700", fontSize: "1.2rem" }}
        >
          Price: ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
