import { TOGGLE_MODAL } from './modal.types';

const initialState = {
  hidden: true,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
