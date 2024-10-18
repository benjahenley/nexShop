export type Product = {
  id: any;
  name: string;
  description?: string;
  url: string;
  price: number;
  createdAt: Date;
  categoryId?: any;
  category?: any | null;
  reviews?: any[];
  orderItems?: any[];
};
