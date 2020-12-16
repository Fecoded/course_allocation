import { TOGGLE_MODAL, TOGGLE_ALLOCATE_MODAL } from "./modal.types";

const initialState = {
  hidden: true,
  allocatehidden: true,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case TOGGLE_ALLOCATE_MODAL:
      return {
        ...state,
        allocatehidden: !state.allocatehidden,
      };
    default:
      return state;
  }
};
