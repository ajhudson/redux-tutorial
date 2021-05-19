import React from "react";
import { node, shape } from "prop-types";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const StateProvider = ({ children, initialState }) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  return <Provider store={store}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: node.isRequired,
  initialState: shape({}),
};

StateProvider.defaultProps = {
  initialState: {},
};

export default StateProvider;
