import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/home"
import Login from "./Pages/login"
import Register from "./Pages/register"
import Inventory from './Pages/Inventory'
import Delivery from './Pages/delivery'
import Description from './Pages/description'
import Tracking from "./Pages/tracking  delivery"
import Loader from './Pages/Loader'
import Tracking2 from './Pages/trackingtwo'
import Tracking3 from './Pages/trackingthree'
import Tracking4 from './Pages/tracking-4'
import Tracking5 from './Pages/tracking-5'
import Tracking6 from './Pages/tracking-6'
import Tracking7 from './Pages/tracking-7'
import Tracking8 from './Pages/tracking-8'
import Tracking9 from './Pages/tracking-9'
import Tracking10 from './Pages/tracking-10'
import Tracking11 from './Pages/tackingeleven'
import Tracking12 from './Pages/tracking-12'
import Tracking13 from './Pages/tracking-13'
import Tracking14 from './Pages/tracking-14'
import Tracking15 from './Pages/tracking15'
import Description2 from './Pages/desp2'
import Description3 from './Pages/desp3'
import Description4 from './Pages/desp4'
import Description5 from './Pages/desp5'
import Description6 from './Pages/desp6'
import Description7 from './Pages/desp7'
import Description8 from './Pages/desp8'
import Description9 from './Pages/desp9'
import Description10 from './Pages/desp10'
import Description11 from './Pages/desp11'
import Description12 from './Pages/desp12'
import Description13 from './Pages/desp13'
import Description14 from './Pages/desp14'
import Description15 from './Pages/desp15'
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
        <Route exact path="/desp2" element={<Description2 />} />
        <Route exact path="/desp3" element={<Description3 />} />
        <Route exact path="/desp4" element={<Description4 />} />
        <Route exact path="/desp5" element={<Description5 />} />
        <Route exact path="/desp6" element={<Description6 />} />
        <Route exact path="/desp7" element={<Description7 />} />
        <Route exact path="/desp8" element={<Description8 />} />
        <Route exact path="/desp9" element={<Description9 />} />
        <Route exact path="/desp10" element={<Description10 />} />
        <Route exact path="/desp11" element={<Description11 />} />
        <Route exact path="/desp12" element={<Description12 />} />
        <Route exact path="/desp13" element={<Description13 />} />
        <Route exact path="/desp14" element={<Description14 />} />
        <Route exact path="/desp15" element={<Description15 />} />
        <Route exact path="/track" element={<Tracking />} />
        <Route exact path="/track2" element={<Tracking2 />} />
        <Route exact path="/track3" element={<Tracking3/>} />
        <Route exact path="/track4" element={<Tracking4/>} />
        <Route exact path="/track5" element={<Tracking5/>} />
        <Route exact path="/track6" element={<Tracking6/>} />
        <Route exact path="/track7" element={<Tracking7/>} />
        <Route exact path="/track8" element={<Tracking8/>} />
        <Route exact path="/track9" element={<Tracking9 />} />
        <Route exact path="/track10" element={<Tracking10/>} />ing
        <Route exact path="/track11" element={<Tracking11 />} />
        <Route exact path="/track12" element={<Tracking12 />} />
        <Route exact path="/track13" element={<Tracking13/>} />
        <Route exact path="/track14" element={<Tracking14 />} />
        <Route exact path="/track15" element={<Tracking15/>} />
        <Route exact path="/Loader" element={<Loader/>} />
      </Routes>
    </>
  )
}

export default App
