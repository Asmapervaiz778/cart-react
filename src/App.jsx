import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import Details from './components/Details'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    
    <BrowserRouter>
       <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/cart" element={<Cart />} />
         <Route path='/details' element={<Details/>}/>
      
        <Route
          path="*"
          element={
            <div >
              <h2>Page not found</h2>
              <p>
                Go back to <Link to="/">Home</Link>
              </p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
