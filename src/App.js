import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { ItemDetail } from "./pages/ItemDetail"
import { LoginProvider } from "./context/LoginContext"
import { UserOrders } from "./pages/UserOrders"
import { Order } from "./pages/Order"

function App() {


  return (
    <LoginProvider>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/:categoryName" element={<Store />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/orders" element={<UserOrders />} />
            <Route path="/orders/:id" element={<Order />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </LoginProvider>
  )
}

export default App;
