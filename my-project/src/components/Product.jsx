import React from 'react'


let Product = (props) => {
  
 
  return (<>
  <div className='product'><div>{props.product_array.name + " " +props.product_array.price }
    </div><br/>
  <button>-</button> {props.product_array.quantity} <button onClick={()=>{props.inc(props.index)}}>+</button><br/> <button className='btn1' onClick={props.Additem}>Add To Cart</button></div>
 
 

  </>
    
  )
}

export default Product