import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Item = (props) => {
  return (
    <Card centered raised style={{'width': '400px'}}>
      <Image src={props.item['image_link']} alt={props.item.name} size='small' centered style={{'width': '60%', 'padding': '10px', 'background': 'white'}}/>
      <Card.Content>
        <Card.Header>{props.item.name}</Card.Header>
        <Card.Description>{props.item.description}</Card.Description>
      </Card.Content>
      <Card.Content>
        Rating: {props.item.rating ? props.item.rating : 'No rating yet'}
        <Card.Meta>{props.item['product_type']}</Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default Item;