import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

const types = ['blush', 'bronzer', 'eyebrow', 'eyeliner', 'eyeshadow', 'foundation', 'lip_liner', 'lipstick', 'mascara', 'nail_polish']

const SearchForm = (props) => {
  const [input, setInput] = useState({
    brand: '',
    type: ''
  })

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = (event) => {
    let formattedInput = {
      brand: input.brand.toLowerCase().replace(' ', '%20'),
      type: input.type.toLowerCase() 
    }
    props.search(event, formattedInput)
    setInput({
      brand: '',
      type: ''
    })
  }

  return (
    <div className='app-form'>
      <Form onSubmit={submitHandler} >
        <Form.Group widths='equal'>
          <Form.Field>
            <label style={{'fontSize': '18px'}}>Brand: </label>
            <input name='brand' value={input.brand} onChange={inputHandler}/>
          </Form.Field>
          <Form.Field>
            <label style={{'fontSize': '18px'}}>Product Type: </label>
            <select name='type' value={input.type} onChange={inputHandler}>
              <option value='' disabled>Select product type</option>
              {types.map(item => <option key={item} value={item}>{item[0].toUpperCase() + item.slice(1).replace('_', ' ').toLowerCase()}</option>)}
            </select>
          </Form.Field>
        </Form.Group>
        <Form.Button color='pink'>Search</Form.Button>
      </Form>
    </div>
  )
}

export default SearchForm;