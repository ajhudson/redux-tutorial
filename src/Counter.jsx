import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "./reducers/counterReducer";

const Counter = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const incrementCounter = () => dispatch({ type: COUNTER_INCREMENT });
  const decrementCounter = () => dispatch({ type: COUNTER_DECREMENT });
  const resetCounter = () => dispatch({ type: COUNTER_RESET });

  return (
    <div>
      Value: {counter}
      <br />
      <Button value="Increment" id="increment-btn" onClick={incrementCounter} />
      <br />
      <Button value="Decrement" id="decrement-btn" onClick={decrementCounter} />
      <br />
      <Button value="Reset" id="reset-btn" onClick={resetCounter} />
    </div>
  );
};

export default Counter;
