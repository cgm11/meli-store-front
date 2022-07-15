import React from "react"

import shipping from "../../assets/shipping.png"
import { Price } from "../../typings"

interface Props {
  id: string
  picture?: string
  title?: string
  price?: Price
  free_shipping: boolean
  setId: React.Dispatch<React.SetStateAction<string>>
}

const Item = (props: Props) => {
  const { id, picture, title, price, free_shipping, setId } = props

  const handleClick = (id: string) => setId(id)

  return (
    <article className="item" onClick={() => handleClick(id)}>
      <img className="productImage" src={picture} alt={title} />
      <div className="itemData">
        <div className="priceContainer">
          <p className="price">
            {`$ ${price?.amount}`}
            <sup>{price?.decimals}</sup>
          </p>
          {free_shipping && <img src={shipping} alt="free shipping" />}
        </div>

        <p className="title">{title}</p>
      </div>
    </article>
  )
}

export default Item
