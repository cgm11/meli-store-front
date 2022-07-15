import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import search from "../../assets/search.png"
import "./styles.scss"

const Input = () => {
  let navigate = useNavigate()
  const [value, setValue] = useState("")
  const [emptyError, setEmptyError] = useState(false)

  const handleKeypress = (
    ev: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    //it triggers by pressing the enter key
    if (ev.key === "Enter") searchItems()
  }

  // Validate input length and redirect to search items
  const searchItems = () => {
    if (value.length < 3) return setEmptyError(true)
    navigate(`/items?search=${value}`, { replace: true })
  }

  useEffect(() => {
    if (value.length >= 3) setEmptyError(false)
  }, [value])

  return (
    <div className="searchContainer">
      <div className="inputContainer">
        <input
          className="search"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Nunca dejes de buscar"
          onKeyPress={handleKeypress}
        />
        {emptyError && (
          <span className="errorMessage">
            por favor ingrese más de 2 caracteres para poder realizar una
            búsqueda
          </span>
        )}
      </div>
      <button className="searchButton" onClick={searchItems}>
        <img className="searchImg" alt="buscar" src={search} />
      </button>
    </div>
  )
}

export default Input
