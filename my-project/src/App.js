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
const dec=(index)=>{
    let newproduct_array=[...product_array]
    if(newproduct_array[index].quantity>0){
        newproduct_array[index].quantity--
        
    }
    incfn(newproduct_array)

}

let [total,updatecart]=useState(0);
const addcart=(ind)=>{
total=total+product_array[ind].quantity;
updatecart(total)


}
let [quant,appendcart]=useState([{i:0,q:0},{i:1,q:0},{i:2,q:0},{i:3,q:0},{i:4,q:0}]);
const showitems=(ind)=>{
    let newarr=[...quant]
    newarr[ind].q= newarr[ind].q+product_array[ind].quantity;
    appendcart(newarr)
    console.log(newarr[0])
    console.log(newarr[1])
    console.log(newarr[2])
    console.log(newarr[3])
    
}





 return(
    
    <div>
        
        <Navbar total={total}></Navbar>
        <Products product_array={product_array} inc={inc} dec={dec} addcart={addcart} showitems={showitems}></Products>
      <div>{product_array[0].quantity}</div><div>{product_array[1].quantity}</div><div>{product_array[2].quantity}</div><div>{product_array[3].quantity}</div><div>{product_array[4].quantity}</div>
    
        
       
    </div>


 )
}
export default App

