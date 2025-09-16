export type ProductCardProps = {
  id?: number;
  image: string;
  title: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
};

export type CartItemProps = {
  id : number,
  image: string;
  title: string;
  color?: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  onRemove: () => void;
  onQuantityChange: (newQty: number) => void;
};

export type CartSummaryProps = {
  subtotal: number;
  discount?: number;
  shipping?: string | number;
  total: number;
  onCheckout: () => void;
};

export type CartItem = {
  id : number;
  title : string;
  image : string;
  price : number;
  quantity : number;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
};
