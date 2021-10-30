import { reaction } from "mobx"
import { getSnapshot, onSnapshot, onPatch } from "mobx-state-tree"
import { WishlistItem, WishList } from "./WishList"

it("Can create a instance of a model", () => {
  const item = WishlistItem.create({
    name: "All quiet on the western front",
    price: 28.73,
  })

  expect(item.price).toBe(28.73)
  expect(item.image).toBe("")
  item.changeName("Lisbon")
  expect(item.name).toBe("Lisbon")
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

it("Can add new items - 2", () => {
  const list = WishList.create()
  const patches = []
  onPatch(list, (patch) => {
    patches.push(patch)
  })

  list.add({
    name: "Chesterton",
    price: 10,
  })

  list.items[0].changeName("Java")
  expect(list.items[0].name).toBe("Java")

  expect(patches).toMatchSnapshot()
})

it("Can add new items - 1", () => {
  const list = WishList.create()
  const states = []
  onSnapshot(list, (snapshot) => {
    states.push(snapshot)
  })

  list.add({
    name: "Chesterton",
    price: 10,
  })

  expect(list.items.length).toBe(1)
  expect(list.items[0].name).toBe("Chesterton")
  list.items[0].changeName("Book of G.K. Chesterton")
  expect(list.items[0].name).toBe("Book of G.K. Chesterton")

  expect(getSnapshot(list)).toMatchSnapshot()

  expect(states).toMatchSnapshot()
})

it("Can calculate the total Price of a wishlist", () => {
  const list = WishList.create({
    items: [
      {
        name: "All quiet on the western front",
        price: 10,
      },
      {
        name: "1941",
        price: 49.79,
      },
    ],
  })

  expect(list.totalPrice).toBe(59.79)

  let changed = 0
  reaction(
    () => list.totalPrice,
    () => changed++,
    console.log("change!!!!!!!!")
  )

  expect(changed).toBe(0)
  console.log(list.totalPrice)
  list.items[0].changeName("Test")
  expect(changed).toBe(0)
  list.items[0].changePrice(30)
  expect(changed).toBe(1)
})
