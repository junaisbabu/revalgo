export interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}
