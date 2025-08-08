import React from "react";

import { Provider } from "react-redux";

import store from "../../redux/store";

const withReduxProvider = (Component) => (props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export default withReduxProvider;
