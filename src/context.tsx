import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, InventoryMap } from "./types";

interface CartItem extends Product {
  quantity: number;
}

interface AppContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  cartTotal: number;
  inventory: InventoryMap;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  formatPrice: (priceInUSD: number) => string;
  convertPrice: (priceInUSD: number) => number;
}

export const exchangeRates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.12,
  AUD: 1.52,
  CAD: 1.35
};

export const currencySymbols: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  INR: "₹",
  AUD: "A$",
  CAD: "C$"
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [inventory, setInventory] = useState<InventoryMap>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [currency, setCurrency] = useState("USD");

  // Fetch real-time inventory from express server
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await fetch("/api/inventory", {
           headers: {
              "Accept": "application/json"
           }
        });
        if (res.ok) {
           const contentType = res.headers.get("content-type");
           if (contentType && contentType.includes("application/json")) {
             const data = await res.json();
             setInventory(data);
           }
        }
      } catch (err) {
        console.error("Failed to fetch inventory", err);
      }
    };

    fetchInventory();
    const interval = setInterval(fetchInventory, 3000);
    return () => clearInterval(interval);
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const convertPrice = (priceInUSD: number) => {
    return priceInUSD * (exchangeRates[currency] || 1);
  };

  const formatPrice = (priceInUSD: number) => {
    const converted = convertPrice(priceInUSD);
    return `${currencySymbols[currency] || "$"}${converted.toFixed(2)}`;
  };

  return (
    <AppContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, cartTotal, inventory, searchQuery, setSearchQuery, currency, setCurrency, formatPrice, convertPrice }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
