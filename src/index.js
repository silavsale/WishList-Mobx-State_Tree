import React from "react"
import ReactDOM from "react-dom"
import "./assets/index.css"
import App from "./components/App"

import { WishList } from "./models/WishList"

const wishList = WishList.create({
  items: [
    {
      name: "ABBA",
      price: 8.79,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Remarque_Im_Westen_nichts_Neues_1929.jpg/220px-Remarque_Im_Westen_nichts_Neues_1929.jpg",
    },
    {
      name: "The Witcher",
      price: 5.99,
      image:
        "https://books.google.com/books/publisher/content/images/frontcover/_E6FDwAAQBAJ?fife=w200-h300",
    },
  ],
})

ReactDOM.render(
  <React.StrictMode>
    <App wishList={wishList} />
  </React.StrictMode>,
  document.getElementById("root")
)

// setInterval(() => {
//   wishList.items[0].changePrice(wishList.items[0].price + 1)
// }, 1000)
