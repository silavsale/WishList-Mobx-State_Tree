import logo from "../assets/santa-claus.png"
import "../assets/index.css"
import WishListView from "./WishListView"

function App({ wishList }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Santa"></img>
        <h1 className="App-title">WishList</h1>
      </header>
      <WishListView wishList={wishList} />
    </div>
  )
}

export default App
