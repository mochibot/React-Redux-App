import React from 'react';

const Item = (props) => {
  return (
    <div>
      <div>{props.item.name}</div>
      <img src={props.item['image_link']} alt={props.item.name}/>
      <div>{props.item.description}</div>
      <div>{props.item.rating ? props.item.rating : 'No rating yet'}</div>
      <div>{props.item['product_type']}</div>
    </div>
  )
}

export default Item;