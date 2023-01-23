import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.warn("set_product Reducer success");
      return [...action.data];

    default:
      return data;
  }
};
