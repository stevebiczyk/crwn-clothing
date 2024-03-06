import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json"; // Path to your products JSON file

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  //   useEffect(() => {
  //     // Simulating fetching data
  //     // In a real app, you might fetch this data from a server
  //     setProducts(PRODUCTS);
  //   }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
