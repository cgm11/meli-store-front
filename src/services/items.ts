export const getItems = async (q: string) => {
  const requestOptions = {
    method: "GET",
  }
  return fetch(
    `http://localhost:3001/api/items/?q=${q}&limit=4`,
    requestOptions
  )
}

export const getItem = async (id: string) => {
  const requestOptions = {
    method: "GET",
  }
  return fetch(`http://localhost:3001/api/items/${id}`, requestOptions)
}
