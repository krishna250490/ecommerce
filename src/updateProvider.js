import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  cartItems:[],
};

export const StateContext = createContext();

const reducer = (state, action) => {
    // console.log(action);

  switch (action.type) {
    case "Add":
        return {
            ...state,cartItems:[...state.cartItems, action.item],
           
  };

  case "Remove":

    const index = state.cartItems.findIndex(
      (cartItem) => cartItem.id === action.id
    );
    let newItems = [...state.cartItems];
  
      newItems.splice(index, 1);
      
      return {
          ...state,
          cartItems: newItems
        }

    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{cartItems:state.cartItems, dispatch}}>
      {children}
    </StateContext.Provider>
  );
};
