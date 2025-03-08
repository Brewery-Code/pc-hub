import { Navigate, Route, Routes } from "react-router-dom";
import { Catalog, Home, Product, ProductList } from "../../pages";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalog" element={<Navigate to="/home/catalog" />} />
        <Route path="/home/catalog" element={<Catalog />} />
        <Route path="/home/catalog/:category" element={<Catalog />} />
        <Route
          path="/home/catalog/:category/:productList"
          element={<ProductList />}
        />
        <Route
          path="/home/catalog/:category/:productList/:product"
          element={<Product />}
        />
      </Routes>
    </div>
  );
}

export default Main;
