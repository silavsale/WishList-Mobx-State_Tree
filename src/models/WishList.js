import { types } from "mobx-state-tree"

const data = {
  name: "All quiet on the western front",
  price: 28.73,
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Remarque_Im_Westen_nichts_Neues_1929.jpg/220px-Remarque_Im_Westen_nichts_Neues_1929.jpg",
}

export const WishlistItem = types.model({
  name: types.string,
  price: types.number,
  image: "",
})

export const WishList = types.model({
  items: types.optional(types.array(WishlistItem), []),
})
