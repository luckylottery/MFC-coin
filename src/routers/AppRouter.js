import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { HomePage } from "../pages/HomePage";

export const AppRouter = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Switch>
            <Route exact path="/home" component={HomePage} />

            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
