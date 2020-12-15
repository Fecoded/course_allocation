import { GET_COURSES, CREATE_COURSE, COURSE_ERROR } from "./course.types";

const INITIALSTATE = {
  courses: [],
  loading: false,
  error: {},
};

const CourseReducer = (state = INITIALSTATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses: payload,
        loading: false,
      };
    case CREATE_COURSE:
      return {
        ...state,
        courses: [...state.courses, payload],
        loading: false,
      };
    case COURSE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default CourseReducer;
