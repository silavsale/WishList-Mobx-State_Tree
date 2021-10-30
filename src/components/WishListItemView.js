import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree"

import WishListItemEdit from "./WishListItemEdit"

const WishListItemView = ({ item }) => {
  const [isEditing, setEditing] = useState(false)

  const onToggleEdit = () => {
    setEditing(!isEditing)
  }
  const onSaveEdit = () => {
    applySnapshot(item, getSnapshot(item))
    setEditing(false)
  }
  const onCancelEdit = () => {
    setEditing(false)
  }

  const renderEditable = () => {
    return (
      <li className="item">
        <WishListItemEdit item={item} />
        <button onClick={onSaveEdit}>💾</button>
        <button onClick={onCancelEdit}>❎</button>
      </li>
    )
  }

  return isEditing ? (
    renderEditable()
  ) : (
    <li className="item">
      {item.image && <img src={item.image} alt={item.name} />}
      <h3>{item.name}</h3>
      <h3>{item.price}</h3>
      <span>
        <button onClick={onToggleEdit}>✏</button>
      </span>
    </li>
  )
}

export default observer(WishListItemView)
