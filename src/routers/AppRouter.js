import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LaunchPadHomePage } from "../pages/LaunchPadHomePage";
import { LaunchPadListPage } from "../pages/LaunchPadListPage";
import { TokenContributionPage } from "../pages/TokenContributionPage";
import { TokenCreationPage } from "../pages/TokenCreationPage";


export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/launchpad" component={LaunchPadHomePage} />
        <Route exact path="/launchpad-list" component={LaunchPadListPage} />
        <Route exact path="/token-creation" component={TokenCreationPage} />
        <Route exact path="/token-contribution" component={TokenContributionPage} />

        <Redirect to="/home" />
      </Switch>
    </Router>
  )
}
