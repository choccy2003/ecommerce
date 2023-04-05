import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
const App = ()=>{

const [product_array,incfn]=useState([{
    
    name:"Tshirt",
    price:1000,
    quantity:0,
},{
    name:"Shirt",
    price:1500,
    quantity:0,
},{
    name:"Jeans",
    price:4000,
    quantity:0,
},{
    name:"Jacket",
    price:10000,
    quantity:0,
},{
    name:"Shoes",
    price:4000,
    quantity:0,
}
])
const inc=(index)=>{
    let newproduct_array=[...product_array]
    newproduct_array[index].quantity++
    incfn(newproduct_array);
    
}
 return(
    
    <div>
        
        <Navbar></Navbar>
        <Products product_array={product_array} inc={inc} ></Products>
        
       
    </div>


 )
}
export default App

