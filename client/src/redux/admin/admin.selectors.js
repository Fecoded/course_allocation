import { createSelector } from "reselect";

const selectUser = (state) => state.admin;

export const selectCurrentAdmin = createSelector(
  [selectUser],
  (admin) => admin
);

export const selectUsers = createSelector([selectUser], (admin) => admin.users);
