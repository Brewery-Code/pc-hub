import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import styles from "./Product.module.css";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../store/product/product.slice";
import { useLocation } from "react-router-dom";
import { UIBreadcrumbs } from "../../components/UI";
import Head from "./Head/Head";
import AllInfo from "./AllInfo/AllInfo";
import Characteristics from "./Characteristics/Characteristics";
import Reviews from "./Reviews/Reviews";
import Credit from "./Credit/Credit";
import { addToCart } from "../../store/user/user.slice";

function Product() {
  const location = useLocation();
  const state = location.state;
  const id = state.id.toString();
  const dispatch = useAppDispatch();
  const { product } = useSelector((state: RootState) => state.product);
  const { access } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (id) dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const addProductToCart = () => {
    if (access) dispatch(addToCart({ access: access, product_id: product.id }));
    else dispatch(addToCart({ product_id: product.id }));
  };

  const [activeSection, setActiveSection] = useState("AllProducts");
  const handleSection = (section: string) => () => setActiveSection(section);

  return (
    <div className={styles.product}>
      <div className="product__container">
        <div className={styles.product__body}>
          <UIBreadcrumbs className={styles.product__breadcrumbs} />
          <Head
            product={product}
            className={styles["product__head"]}
            handleSection={handleSection}
            activeSection={activeSection}
          />
          {activeSection === "AllProducts" && (
            <AllInfo
              className={styles.product__body}
              product={product}
              handleSection={handleSection}
              addProductToCart={addProductToCart}
            />
          )}
          {activeSection === "Characteristics" && (
            <Characteristics
              product={product}
              addProductToCart={addProductToCart}
            />
          )}
          {activeSection === "Reviews" && (
            <Reviews product={product} addProductToCart={addProductToCart} />
          )}
          {activeSection === "Credit" && (
            <Credit product={product} addProductToCart={addProductToCart} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
