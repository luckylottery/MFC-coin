import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LaunchPadPage } from "../pages/LaunchPadPage";
import { TokenCreationPage } from "../pages/TokenCreationPage";


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
