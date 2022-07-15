import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getItem } from "../../services/items"
import { ItemDescription } from "../../typings"
import Breadcrumb from "../Breadcrumb"
import Button from "../Share/Button"
import "./styles.scss"

const ItemDetails = () => {
  let { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [item, setItem] = useState<ItemDescription>()
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    // get item from api
    getItem(id || "")
      .then((e: any) => e.json())
      .then((res) => {
        const result = res.data;
        setItem(result.item)
        setCategories(result?.categories || [])
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <main className="mainContainer">
      {isLoading ? (
        <p className="loading">cargando...</p>
      ) : (
        <>
          <Breadcrumb categories={categories} />
          <div className="itemContainer container">
            {!!item ? (
              <>
                <section className="infoItemContainer">
                  <img
                    className="itemDetailImg"
                    src={item.picture}
                    alt={item.title}
                  />
                  <div className="detailsContainer">
                    <p className="itemDetailCondition">
                      {`${item.condition === "new" ? "Nuevo" : "Usado"} - ${
                        item.sold_quantity
                      } vendidos`}{" "}
                    </p>
                    <h2 className="itemDetailTitle">{item.title}</h2>
                    <p className="itemDetailPrice">
                      {`$ ${item.price.amount}`}
                      <sup>{item.price.decimals}</sup>
                    </p>
                    <Button name="Comprar" onClick={() => {}} />
                  </div>
                </section>
                {item?.description && (
                  <section className="descriptionContainer">
                    <h2 className="titleDescription">
                      Descripción del producto
                    </h2>
                    <p className="description">{item.description}</p>
                  </section>
                )}
              </>
            ) : (
              <div className="emptyItems">
                Hubo un inconveniente mostrando el dellate del producto
              </div>
            )}
          </div>
        </>
      )}
    </main>
  )
}

export default ItemDetails
