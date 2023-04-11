import React from 'react'


let Product = (props) => {
  const multi=()=>{
    
    props.dec(props.index)
  
    
  }
  const multi2=()=>{
    props.addcart(props.index)
    props.showitems(props.index)
  }

 
  return (<>
  <div className='product'><div className='item'><div>{props.product_array.name + " " +props.product_array.price }
    </div><br/>
  <button onClick={()=>{multi()}}>-</button> {props.product_array.quantity} <button onClick={()=>{props.inc(props.index)}}>+</button><br/> <button className='btn1' onClick={multi2}>Add To Cart</button></div></div>
 
 

  </>
    
  )
}

export default Product