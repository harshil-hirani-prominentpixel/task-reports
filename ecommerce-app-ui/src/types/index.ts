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