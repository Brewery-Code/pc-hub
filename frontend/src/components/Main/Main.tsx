import { Navigate, Route, Routes } from "react-router-dom";
import { Catalog, Home, ProductList } from "../../pages";

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
          path="/home/catalog/:category/:productList/:page?"
          element={<ProductList />}
        />
      </Routes>
    </div>
  );
}

export default Main;
