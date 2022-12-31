import React from 'react'

export default function Cards({products}) {
    function getfinalprice(price,count,discount){
        return price*count-(price*count*discount)/100
    }
  return (
    <div>
        {
            products.map((item)=>{
                return (<div>
                    <div>
                    product Name:{item.productName}
                    </div>
                    <div>
                        productprice:{item.price*item.count}
                    </div>
                    <div>count:{item.count}</div>
                    <p>{item.price*item.count}</p>
                    <div>totalprice:{getfinalprice(item.price,item.count,item.discount)}</div>
                   
                  
                   
                </div>
                )
                })
        }
    </div>
  )
}
