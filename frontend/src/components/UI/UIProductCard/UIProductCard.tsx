import { IProduct } from "../../../store/topSales/topSales.slice";
import RowCard from "./RowCard/RowCard";
import GridCard from "./GridCard/GridCard";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { addToCart, fetchCart } from "../../../store/user/user.slice";

interface IUIProductCardProps {
  product: IProduct;
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
  const { access } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const addProductToCart = async () => {
    await dispatch(addToCart({ access, product_id: product.id }));
    dispatch(fetchCart({ access }));
  };

  if (type === "grid") {
    return (
      <GridCard
        product={product}
        className={className}
        color={color}
        addProductToCart={addProductToCart}
      />
    );
  } else if (type === "row") {
    return (
      <RowCard
        product={product}
        className={className}
        color={color}
        addProductToCart={addProductToCart}
      />
    );
  }
}

export default UIProductCard;
