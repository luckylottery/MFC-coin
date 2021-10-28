import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LaunchPadHomePage } from "../pages/LaunchPadHomePage";
import { LaunchPadListPage } from "../pages/LaunchPadListPage";
import { TokenContributionPage } from "../pages/TokenContributionPage";
import { LaunchpadToken } from "../pages/LaunchpadToken";
import { TokenCreationPage } from "../pages/TokenCreationPage";
import { TokenCreationFormPage } from "../pages/TokenCreationFormPage";
import { LiquidityLockPage } from "../pages/LiquidityLockPage";
import { TokenCreationService } from "../pages/TokenCreationService";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/launchpad" component={LaunchPadHomePage} />
        <Route exact path="/launchpad-list" component={LaunchPadListPage} />
        <Route exact path="/launchpad-token" component={LaunchpadToken} />
        <Route exact path="/token-contribution" component={TokenContributionPage} />
        <Route exact path="/token-creation-form" component={TokenCreationFormPage} />
        <Route exact path="/token-creation-service" component={TokenCreationService} />
        <Route exact path="/token-creation" component={TokenCreationPage} />
        <Route exact path="/liquidity-lock" component={LiquidityLockPage} />

        <Redirect to="/home" />
      </Switch>
    </Router>
  )
}
