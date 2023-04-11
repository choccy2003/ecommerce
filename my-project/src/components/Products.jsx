import React from "react";
import "./productcss.css";
import Product from "./Product";


let Products= (props)=>{

   
    return(
        <div className="product-grid">
           {
        props.product_array.map((product_array,i)=>{
            
            return (<Product product_array={product_array} key={i} inc={props.inc} dec={props.dec} index={i} addcart={props.addcart} showitems={props.showitems} ></Product>)
            
        })
        
    } 
        </div>
        
        
    )

}

export default Products