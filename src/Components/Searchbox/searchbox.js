import React from 'react'

const Searchbox = ({searchChange}) => {
  return (
    <form className="mb3">
      <input 
        className="pa3 ba b--green bg-lightest-blue" 
        type='text' 
        onChange={searchChange}
        placeholder="search robots" 
      />
    </form>
  )
}

export default Searchbox;