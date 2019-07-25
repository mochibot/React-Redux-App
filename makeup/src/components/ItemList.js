import React from 'react';
import Item from './Item';

const ItemList = (props) => {
  return (
    <div>
      {props.list.map(item => <Item key={item.id} item={item}/>)}
    </div>
  )
}

export default ItemList;