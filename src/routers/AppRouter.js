import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { HomePage } from "../pages/HomePage";

export const AppRouter = () => {
  return (
    <Router>
      <div className="w-screen">
        <div className="flex">
          <Sidebar />
          <div className="w-full overflow-hidden">
            <Navbar />
            <Switch>
              <Route exact path="/home" component={HomePage} />

              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}
