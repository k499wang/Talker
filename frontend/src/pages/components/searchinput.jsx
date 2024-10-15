import React from 'react'

const SearchInput = () => {
  return (
    <div>
      <form className = "flex item-center gap-2">
        <input type = "text" placeholder = "Search" className = "border border-gray-300 rounded-md p-3 w-full" />
        <button className = "btn btn-primary">Search</button>
        </form>
    </div>
  )
}

export default SearchInput
