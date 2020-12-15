import { createSelector } from "reselect";

const selectCourse = (state) => state.courses;

export const selectCourses = createSelector(
  [selectCourse],
  (course) => course.courses
);
