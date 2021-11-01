import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { HomePage } from "../pages/HomePage";

export const AppRouter = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div>
          <Switch>
            <Route exact path="/home" component={HomePage} />

            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
