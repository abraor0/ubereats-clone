import React, { createContext, useReducer, useContext } from 'react';

interface cartItem {
  title: string;
  unitValue: number;
  quantity: number;
};

interface cartList {
  storeTitle: string;
  items: cartItem[];
};

type cartDispatchedAction = {
  type: 'remove';
  val: string;
} | {
  type: 'add';
  val: cartItem;
  storeTitle: string;
} | {
  type: 'decrease';
  val: cartItem;
  storeTitle: string;
};

interface CartContextInterface {
  dispatchCartState: React.Dispatch<cartDispatchedAction>;
  cartList: cartList;
};

function cartReducer(state: cartList, action: cartDispatchedAction): cartList {
  let updatedStoreTitle: string;
  let newItemsArr: cartItem[];
  let alreadyHasProduct: number;

  switch(action.type){
    case 'remove':
      newItemsArr = state.items.filter(item => item.title !== action.val);

      if (newItemsArr.length === 0) updatedStoreTitle = '';
      else updatedStoreTitle = state.storeTitle;

      return {
        storeTitle: updatedStoreTitle,
        items: newItemsArr
      };
    case 'add':
      newItemsArr = [...state.items];
      alreadyHasProduct = newItemsArr.findIndex(cartItem => cartItem.title === action.val.title);
      if (alreadyHasProduct >= 0) {
        console.log(newItemsArr[alreadyHasProduct]);
        newItemsArr[alreadyHasProduct].quantity += action.val.quantity;
        console.log(newItemsArr[alreadyHasProduct]);        
      } else {
        newItemsArr.push(action.val);
      }

      if (state.storeTitle === '') updatedStoreTitle = action.storeTitle;
      else updatedStoreTitle = state.storeTitle;

      return {
        storeTitle: updatedStoreTitle,
        items: newItemsArr
      };
    case 'decrease':
      newItemsArr = [...state.items];
      alreadyHasProduct = newItemsArr.findIndex(cartItem => cartItem.title === action.val.title);
      if (alreadyHasProduct >= 0) newItemsArr[alreadyHasProduct].quantity -= action.val.quantity;
      if (newItemsArr[alreadyHasProduct].quantity === 0) newItemsArr.splice(alreadyHasProduct, 1);
      
      if (newItemsArr.length === 0) updatedStoreTitle = '';
      else updatedStoreTitle = state.storeTitle;
      
      return {
        storeTitle: updatedStoreTitle,
        items: newItemsArr
      };
  };
};

const cartContext = createContext({} as CartContextInterface);

const useCartContext = () => useContext(cartContext);

const CartContext: React.FC = ({ children }) => {
  const [ cartState, dispatchCartState ] = useReducer(cartReducer, {
    storeTitle: '',
    items: []
  });

  return (
  <cartContext.Provider value={{dispatchCartState: dispatchCartState, cartList: cartState}}>
    {children}
  </cartContext.Provider>
  );
};

export {
  CartContext,
  useCartContext
};