import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import styles from "./Product.module.css";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../store/product/product.slice";
import {
  URLSearchParamsInit,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { UIBreadcrumbs } from "../../components/UI";
import Head from "./Head/Head";
import AllInfo from "./AllInfo/AllInfo";
import Characteristics from "./Characteristics/Characteristics";
import Reviews from "./Reviews/Reviews";
import Credit from "./Credit/Credit";
import {
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  fetchWishlist,
} from "../../store/user/user.slice";
import { IProduct } from "../../store/types";

function RenderSection({
  nav,
  product,
  handleSection,
  addProductToCart,
  toggleProductWishlist,
  isProductLiked,
}: {
  nav: string | null;
  product: IProduct;
  handleSection: (params: URLSearchParamsInit) => void;
  addProductToCart: () => void;
  toggleProductWishlist: () => void;
  isProductLiked: boolean;
}) {
  if (nav === "allInfo")
    return (
      <AllInfo
        className={styles.product__body}
        product={product}
        handleSection={handleSection}
        addProductToCart={addProductToCart}
        toggleProductWishlist={toggleProductWishlist}
        isProductLiked={isProductLiked}
      />
    );
  else if (nav === "characteristics")
    return (
      <Characteristics
        product={product}
        addProductToCart={addProductToCart}
        toggleProductWishlist={toggleProductWishlist}
        isProductLiked={isProductLiked}
      />
    );
  else if (nav === "reviews")
    return (
      <Reviews
        product={product}
        addProductToCart={addProductToCart}
        toggleProductWishlist={toggleProductWishlist}
        isProductLiked={isProductLiked}
      />
    );
  else if (nav === "credit")
    return (
      <Credit
        product={product}
        addProductToCart={addProductToCart}
        toggleProductWishlist={toggleProductWishlist}
        isProductLiked={isProductLiked}
      />
    );
}

function Product() {
  const location = useLocation();
  const state = location.state;
  const dispatch = useAppDispatch();
  const { product } = useSelector((state: RootState) => state.product);
  const { access, wishlist } = useSelector((state: RootState) => state.user);
  const [searchParams, setSearchParams] = useSearchParams();
  const nav = searchParams.get("nav");
  const params = useParams();
  const id = state?.id?.toString();

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct({ id }));
    } else if (params) dispatch(fetchProduct({ id: params.product }));
  }, [dispatch, id]);

  useEffect(() => {
    if (!nav) setSearchParams({ nav: "allInfo" });
  }, []);

  const addProductToCart = () => {
    if (access) dispatch(addToCart({ access: access, product_id: product.id }));
    else dispatch(addToCart({ product_id: product.id }));
  };

  const [isProductLiked, setIsProductLiked] = useState(false);
  useEffect(() => {
    setIsProductLiked(checkIsProductLiked());
  }, [wishlist]);

  const checkIsProductLiked = () => {
    const productID = wishlist.items?.find((item) => item.id === product.id);
    if (productID) return true;
    else return false;
  };

  const toggleProductWishlist = async () => {
    if (checkIsProductLiked()) {
      await dispatch(deleteFromWishlist({ access, product_id: product.id }));
      setIsProductLiked(false);
    } else {
      await dispatch(addToWishlist({ access, product_id: product.id }));
      setIsProductLiked(true);
    }
    dispatch(fetchWishlist({ access }));
  };

  return (
    <div className={styles.product}>
      <div className="product__container">
        <div className={styles.product__body}>
          <UIBreadcrumbs className={styles.product__breadcrumbs} />
          <Head
            product={product}
            className={styles["product__head"]}
            handleSection={setSearchParams}
            activeSection={nav}
          />
          <RenderSection
            nav={nav}
            product={product}
            handleSection={setSearchParams}
            addProductToCart={addProductToCart}
            toggleProductWishlist={toggleProductWishlist}
            isProductLiked={isProductLiked}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
