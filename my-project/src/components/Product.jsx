import React from 'react'

const Product = (props) => {
  
 
  return (<>
  <div className='product'><div>{props.product_array.name + " " +props.product_array.price }
    </div><br/>
  <button>-</button> {props.product_array.quantity} <button onClick={()=>{props.inc(props.index);}}>+</button></div>
  
  </>
    
  )
}

export default Product