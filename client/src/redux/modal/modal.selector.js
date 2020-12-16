import { createSelector } from "reselect";

const selectModal = (state) => state.modal;

export const selectToggleHidden = createSelector(
  [selectModal],
  (modal) => modal.hidden
);
export const selectAllocateToggleHidden = createSelector(
  [selectModal],
  (modal) => modal.allocatehidden
);
