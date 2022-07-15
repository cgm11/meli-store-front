import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { getItems } from "../../services/items"
import { ItemInterface } from "../../typings"
import Breadcrumb from "../Breadcrumb"
import Item from "./item"
import "./styles.scss"

const Items = () => {
  let navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [emptyItemsError, setEmptyItemsError] = useState(false)
  const [items, setItems] = useState<ItemInterface[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [id, setId] = useState("")

  const query = useQuery()
  const search = query?.get("search") || ""

  useEffect(() => {
    setIsLoading(true)
    // get items from api
    getItems(search)
      .then((e: any) => e.json())
      .then((res) => {
        const result = res.data
        if (!result.items.length) { // if no items were found in the api
          setItems([])
          setEmptyItemsError(true)
        } else {
          setItems(result.items);
          setCategories(result.categories)
          setEmptyItemsError(false)
        }
        setIsLoading(false)
      })
      .catch(() => {
        setEmptyItemsError(true)
        setIsLoading(false)
      })
  }, [search])

  useEffect(() => { // redirects when an item is clicked on
    if (id !== "") navigate(`/items/${id}`, { replace: true })
  }, [id])

  return (
    <main className="mainContainer">
      {isLoading ? (
        <p className="loading">cargando...</p>
      ) : (
        <>
          <Breadcrumb categories={categories} />
          <section className="itemsContainer container">
            {!!items.length ? (
              items?.map((item, index) => (
                <Item {...item} key={index} setId={setId} />
              ))
            ) : (
              <>
                {emptyItemsError && (
                  <div className="emptyItems">
                    No se encontraron resultados para tu búsqueda, intenta de
                    nuevo
                  </div>
                )}
              </>
            )}
          </section>
        </>
      )}
    </main>
  )
}

export default Items

// get the search query
function useQuery() {
  const { search } = useLocation()

  return React.useMemo(() => new URLSearchParams(search), [search])
}
