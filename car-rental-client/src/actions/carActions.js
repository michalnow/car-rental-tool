import axios from "axios";
import { GET_ERRORS } from "./types";

export const createCar = (car, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/api/car", car);
    history.push("/cars");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
