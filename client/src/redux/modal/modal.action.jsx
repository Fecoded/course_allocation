import { TOGGLE_MODAL, TOGGLE_ALLOCATE_MODAL } from "./modal.types";

export const toggleModalHidden = () => (dispatch) => {
  dispatch({ type: TOGGLE_MODAL });
};
export const toggleAllocateModalHidden = () => (dispatch) => {
  dispatch({ type: TOGGLE_ALLOCATE_MODAL });
};
