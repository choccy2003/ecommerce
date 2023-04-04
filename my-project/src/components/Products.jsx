import React from "react";
import "./productcss.css";
import Product from "./Product";

const Products= (props,i)=>{

    return(
        <div className="product-grid">
           {
        props.product_array.map((product_array)=>{
            
            return (<Product product_array={product_array} key={i} inc={props.inc} index={i} ></Product>)
            
        })
        
    } 
        </div>
        
        
    )

}

export default Products