import React from "react";
import "./productcss.css";
import Product from "./Product";


let Products= (props,i)=>{

    const Additem=()=>{
        let total=0;
        let j=0;
        for(j=0;j<6;j++){
             total=total+props.product_array[j].quantity
        }
        document.write(total)
       
    
    }
    return(
        <div className="product-grid">
           {
        props.product_array.map((product_array,i)=>{
            
            return (<Product product_array={product_array} key={i} inc={props.inc} index={i} additem={Additem} ></Product>)
            
        })
        
    } 
        </div>
        
        
    )

}

export default Products