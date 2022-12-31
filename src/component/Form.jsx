import React from 'react'
import { useState } from 'react'

export default function Form({setProducts}) {
    const [values,setValues]=useState({productName:"SHAMPOO",count:null,price:null,discount:20})
   
    function handleInput(key,text){
        setValues((prev)=>({ ...prev,
            [key]:text 
           
            })
           
       )
    //    console.log(text);

    
        
    }
    function handleSubmit(e){
        e.preventDefault();
    setProducts((prev)=>[
        ...prev,values
    ])
    }

  return (
    <div>
        <form>
            <label htmlFor="Name">Enter your Product Name...</label>
            <input type="text" 
            value={values.productName}
            onChange={(e)=>handleInput("name",e.target.value)}
             />
             <label htmlFor='count'>Enter your count...</label>
             <input type="number"
              value={values.count}
              onChange={(e)=>handleInput("count",e.target.value)}
             />
             <label htmlFor='price'>Enter your price...</label>
             <input type="number"
              value={values.price}
              onChange={(e)=>handleInput("price", e.target.value)}
              />
             <label htmlFor='discount'>Enter your discount...</label>
             <input type="range" 
             value={values.discount}
             onChange={(e)=>handleInput("range",e.target.value)}
             />
             <span>{values.discount}</span>
            <button type='submit' onClick={handleSubmit}>submit</button>
        </form>
    </div>
  )
}
