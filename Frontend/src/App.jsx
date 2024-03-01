import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/home"
import Login from "./Pages/login"
import Register from "./Pages/register"
import Inventory from './Pages/Inventory'
import Delivery from './Pages/delivery'
import Description from './Pages/description'
import Track from "./Pages/tracking  delivery"
// import Loader from './Pages/Loader'

function App() {


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/inventory" element={<Inventory />} />
        <Route exact path="/delivery" element={<Delivery />} />
        <Route exact path="/desp" element={<Description />} />
        <Route exact path="/track" element={<Track />} />

      </Routes>
    </>
  )
}

export default App
