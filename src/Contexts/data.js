import { createContext, useContext, useState, useEffect } from "react";
import Data from "../Data/data.json";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [productInfo, setProductInfo] = useState([]);
  const [cart, setCart] = useState([]);
  const [saveForLater, setSaveForLater] = useState([]);

  useEffect(() => {
    setProductInfo(
      Data.map((item) => ({
        id: item.id,
        brand: item.brand,
        name: item.name,
        img: item.img,
        price: item.price,
        cart: 0,
        later: false,
      }))
    );
  }, []);

  const value = {
    productInfo,
    setProductInfo,
    cart,
    setCart,
    saveForLater,
    setSaveForLater,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
