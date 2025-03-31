import { Route, Routes } from "react-router-dom";
import { Catalog, Home, Product, ProductList } from "../../pages";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog/" element={<Catalog />} />
        <Route path="/catalog/:category/" element={<Catalog />} />
        <Route path="/products/" element={<ProductList />} />
        <Route path="/products/:product/" element={<Product />} />
      </Routes>
    </div>
  );
}

export default Main;
