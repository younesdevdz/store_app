import "./App.css";
import Header from "./container/header";
import {BrowserRouter as Router  , Route  , Routes} from 'react-router-dom'
import ProductComponents from "./container/productComponents";
import ProductListing from "./container/productListing";
import ProductDetail from "./container/productDetail";
function App() { 


return (
  <div className="App">
  <Header />
 
  <Router>
    <Routes>
        <Route exact path="/" element={<ProductListing />} />
        <Route exact path="/product/productId" element={<ProductDetail />} />
       
    </Routes>
</Router>
  </div>
)
}
export default App;