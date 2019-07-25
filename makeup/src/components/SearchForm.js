import React, { useState } from 'react';

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
      brand: input.brand.toLowerCase().replace(' ', '%'),
      type: input.type.toLowerCase() 
    }
    props.search(event, formattedInput)
    setInput({
      brand: '',
      type: ''
    })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Brand: </label>
        <input name='brand' value={input.brand} onChange={inputHandler}/>
        <label>Product Type: </label>
        <select name='type' value={input.type} onChange={inputHandler}>
          <option value='' disabled>Select product type</option>
          {types.map(item => <option key={item} value={item}>{item[0].toUpperCase() + item.slice(1).replace('_', ' ').toLowerCase()}</option>)}
        </select>
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchForm;