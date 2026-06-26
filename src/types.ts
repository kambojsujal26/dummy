export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface InventoryMap {
  [productId: string]: number;
}
