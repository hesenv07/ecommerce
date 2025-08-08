import withRouter from "./withRouter";

import withReduxProvider from "./withReduxProvider";

import { compose } from "../../shared/lib/utils/Common";

const withProviders = compose(withRouter, withReduxProvider);

export default withProviders;
