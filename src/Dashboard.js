// import ProductList from "./ProductList";

// function Dashboard({ products, loading }) {
//   return (
//     <div style={{ textAlign: "center"}}>
//       <h1>Product Dashboard</h1>
//       {loading ? <p>Loading products...</p> : <ProductList products={products}/>}
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import { Box, Typography, CircularProgress, Container } from "@mui/material";
import ProductList from "./ProductList";

function Dashboard({ products, loading }) {
  return (
    <Box 
      sx={{ 
        backgroundColor: "#f8f9fa", 
        minHeight: "100vh", 
        py: 4 
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component="h1" 
          align="center" 
          gutterBottom
          sx={{ fontWeight: 700, color: "#1a202c", mb: 4 }}
        >
          Product Dashboard
        </Typography>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
            <CircularProgress size={50} thickness={4} />
          </Box>
        ) : (
          <ProductList products={products} />
        )}
      </Container>
    </Box>
  );
}

export default Dashboard;
