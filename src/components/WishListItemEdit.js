import React, { Component } from "react"
import { observer } from "mobx-react"

const WishListItemEdit = ({ item, clone }) => {
  console.log("WishListItemEdit item:", item)
  console.log("WishListItemEdit clone:", clone)

  const onChangeName = (event) => {
    item.changeName(event.target.value)
  }
  const onChangePrice = (event) => {
    const price = parseInt(event.target.value)
    if (!isNaN(price)) item.changePrice(price)
  }
  const onChangeImage = (event) => {
    item.changeImage(event.target.value)
  }

  return (
    <div className="list">
      Thing: <input value={item.name} onChange={onChangeName} />
      <br />
      Price: <input value={item.price} onChange={onChangePrice} />
      <br />
      Image: <input value={item.image} onChange={onChangeImage} />
      <br />
    </div>
  )
}

export default observer(WishListItemEdit)
