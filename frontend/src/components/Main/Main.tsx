import { Route, Routes } from "react-router-dom";
import { Catalog, Home, Product, ProductList, User } from "../../pages";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog/" element={<Catalog />} />
        <Route path="/catalog/:category/" element={<Catalog />} />
        <Route path="/products/" element={<ProductList />} />
        <Route path="/products/:product/" element={<Product />} />
        <Route path="/user/" element={<User />} />
      </Routes>
    </div>
  );
}

export default Main;
