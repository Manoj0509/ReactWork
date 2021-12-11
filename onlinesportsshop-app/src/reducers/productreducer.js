const initialState = {
    products: [],
    product: {},
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_PRODUCT":
        return { ...state, product: action.payload };
      case "ADD_PRODUCT":
        return { ...state, products: [...products, action.payload] }; // [p1, p2, p3, p4]
      case "DELETE_PRODUCT":
        const products = state.products.filter((p) => p.id !== action.payload.id); // p1, p3
        return { ...state, products: products };
      case "UPDATE_PRODUCT":
        return state.products.map((p) =>
          p.id === action.payload.id ? action.payload : p
        );
      default:
        return state;
    }
  };
  
  export default productReducer;