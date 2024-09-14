import React from 'react'

import Fruit from './fruit';

function Fruits() {
    let fruits=[
        {name:'Apple', price:'100rs'},
        {name:'Orange', price:'200rs'},
        {name:'Mango', price:'150rs'},
    ];
  return <div>{fruits.map(fruit =>(
        <Fruit name={fruit.name} price={fruit.price} />
    ))}</div>
  
}

export default Fruits;