
import './App.css'

import Form from './component/Form'
import  Cards from './component/Cards'
import { useState } from 'react';

function App() {
  const [products,setProducts]=useState([]);
  
  return (
    <>
    <Form setProducts={setProducts}/>
    <Cards products={products}/>

    </>
  )
}

export default App
