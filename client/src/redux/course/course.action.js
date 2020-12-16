import { GET_COURSES, CREATE_COURSE, COURSE_ERROR } from "./course.types";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import { setAlert } from "../alert/alert.action";
import { toggleModalHidden } from "../modal/modal.action";

export const getCourses = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/course");

    dispatch({
      type: GET_COURSES,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({ type: COURSE_ERROR });

    console.error(err);
  }
};

export const createCourse = ({
  course_name,
  course_unit,
  level,
  rank,
  setCourseName,
  setCourseUnit,
  setRank,
  setLevel,
}) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ course_name, course_unit, level, rank });

  try {
    const res = await axios.post("/api/course", body, config);

    dispatch({
      type: CREATE_COURSE,
      payload: res.data.data,
    });

    setCourseName("");
    setCourseUnit("");
    setRank("");
    setLevel("");
    dispatch(setAlert("Course was created successfully", "success"));
    setTimeout(() => {
      dispatch(toggleModalHidden());
    }, 3000);
  } catch (err) {
    dispatch({ type: COURSE_ERROR, payload: err.response.data });

    const error = err.response.data.msg;

    dispatch(setAlert(error, "danger"));
  }
};
