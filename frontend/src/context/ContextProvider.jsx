import { createContext, useContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

export function UseContext() {
  return useContext(StoreContext);
}

const StoreContextProvider = ({ children }) => {
  const [cartItems, setItemsCart] = useState([]);

  const addToCart = (itemId) => {
    
  }


  const contextValue = {
    food_list,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
