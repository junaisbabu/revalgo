export type Name = {
  firstname: string;
  lastname: string;
};

export type Address = {
  city: string;
  zipcode: string;
};

export interface User {
  id: number;
  name: Name;
  email: string;
  username: string;
  address: Address;
  phone: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}
