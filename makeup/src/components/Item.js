import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';

const Item = (props) => {
  return (
    <Card centered raised style={{'width': '350px', 'margin': '10px 20px', 'textAlign': 'left'}}>
      <Image src={props.item['image_link']} alt={props.item.name} size='small' centered style={{'width': '60%', 'padding': '10px', 'background': 'white'}}/>
      <Card.Content>
        <Card.Header>{props.item.name}</Card.Header>
        <Card.Description>{props.item.description}</Card.Description>
      </Card.Content>
      <Card.Content>
        Rating: {props.item.rating ? <Rating icon='heart' defaultRating={props.item.rating} maxRating={5} /> : 'No rating yet'}
        <Card.Meta>{props.item['product_type'].replace('_', ' ').toUpperCase()}</Card.Meta>
        <Card.Meta>{props.item.brand[0].toUpperCase() + props.item.brand.slice(1)}</Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default Item;