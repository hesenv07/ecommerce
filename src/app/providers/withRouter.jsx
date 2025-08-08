import React from "react";

import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "../../components/ScrollToTop";

const withRouter = (Component) => (props) => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Component {...props} />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default withRouter;
