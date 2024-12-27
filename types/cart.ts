export type Cart = {
  id: string;
  userId: string;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
};

export interface CartState {
  carts: Cart[];
  loading: boolean;
  error: string | null;
}
