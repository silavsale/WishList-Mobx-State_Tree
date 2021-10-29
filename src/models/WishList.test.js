import { WishlistItem, WishList } from "./WishList"

it("Can create a instance of a model", () => {
  const item = WishlistItem.create({
    name: "All quiet on the western front",
    price: 28.73,
  })

  expect(item.price).toBe(28.73)
  expect(item.image).toBe("")
})

it("Can create a wishlist", () => {
  const list = WishList.create({
    items: [
      {
        name: "All quiet on the western front",
        price: 28.73,
      },
    ],
  })

  expect(list.items.length).toBe(1)
  expect(list.items[0].price).toBe(28.73)
})
