import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { LaunchPadPage } from "../Pages/LaunchPadPage";
import { TokenCreationPage } from "../Pages/TokenCreationPage";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/launchpad" component={LaunchPadPage} />
        <Route exact path="/token-creation" component={TokenCreationPage} />

        <Redirect to="/home" />
      </Switch>
    </Router>
  )
}
