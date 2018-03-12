export interface User {
  _id: number | string;
  avatar: string;
  email: string;
  name: string;
  password?: string;
  phone?: string;
}
