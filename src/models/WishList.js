import { types } from "mobx-state-tree"

// const data = {
//   name: "All quiet on the western front",
//   price: 28.73,
//   image:
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Remarque_Im_Westen_nichts_Neues_1929.jpg/220px-Remarque_Im_Westen_nichts_Neues_1929.jpg",
// }

export const WishlistItem = types
  .model({
    name: types.string,
    price: types.number,
    image: "",
  })
  .actions((self) => ({
    changeName(newName) {
      self.name = newName
    },
    changePrice(newPrice) {
      self.price = newPrice
    },
    changeImage(newImage) {
      self.image = newImage
    },
  }))

export const WishList = types
  .model({
    items: types.optional(types.array(WishlistItem), []),
  })
  .actions((self) => ({
    add(item) {
      self.items.push(item)
    },
  }))
  .views((self) => ({
    get totalPrice() {
      return self.items.reduce((sum, entry) => sum + entry.price, 0)
    },
  }))
