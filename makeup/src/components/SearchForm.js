import React, { useState } from 'react';

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
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Brand: </label>
        <input name='brand' value={input.brand} onChange={inputHandler}/>
        <label>Product Type: </label>
        <input name='type' value={input.type} onChange={inputHandler}/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchForm;