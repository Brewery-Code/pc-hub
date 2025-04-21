import RowCard from "./RowCard/RowCard";
import GridCard from "./GridCard/GridCard";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import {
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  fetchCart,
  fetchWishlist,
} from "../../../store/user/user.slice";
import { useEffect, useState } from "react";
import { IWishlistProduct, IProduct } from "../../../store/types";

interface IUIProductCardProps {
  product: IProduct | IWishlistProduct;
  className?: string;
  type?: "grid" | "row";
  color?: "light" | "dark";
  key?: string | number;
}

function UIProductCard({
  product,
  className,
  type = "grid",
  color = "light",
}: IUIProductCardProps) {
  const { access, wishlist } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const addProductToCart = async () => {
    await dispatch(addToCart({ access, product_id: product.id }));
    dispatch(fetchCart({ access }));
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

  if (type === "grid") {
    return (
      <GridCard
        product={product}
        className={className}
        color={color}
        addProductToCart={addProductToCart}
        toggleProductWishlist={toggleProductWishlist}
        isProductLiked={isProductLiked}
      />
    );
  } else if (type === "row") {
    return (
      <RowCard
        product={product}
        className={className}
        color={color}
        addProductToCart={addProductToCart}
        toggleProductWishlist={toggleProductWishlist}
        isProductLiked={isProductLiked}
      />
    );
  }
}

export default UIProductCard;
