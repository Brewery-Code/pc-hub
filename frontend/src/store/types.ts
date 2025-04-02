interface IAttribute {
  attribute_name: string;
  value: string;
}

interface IImages {
  image: string;
}

interface IDelivery_options {
  name: string;
  free_from: string;
}

interface IProduct {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  discounted_price: number;
  rating: number;
  attributes: IAttribute[];
  images: IImages[];
  is_new: boolean;
  is_stock: boolean;
  warranty: number;
  estimated_shipping_time: string;
  delivery_options: IDelivery_options[];
}

interface IUser {
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  name: string;
  surname: string;
  email: string;
  access: string;
  refresh: string;
}

export { type IProduct, type IUser };
