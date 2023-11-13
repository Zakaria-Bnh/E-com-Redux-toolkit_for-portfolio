import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Main,
  ProductDetails,
  Cart,
  NotFoundPage,
  Header,
  Footer,
  Products,
} from "./components/index";

const App = () => {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/productdetails/:productID"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notfoundpage" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
