export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  selected?: boolean;
}
